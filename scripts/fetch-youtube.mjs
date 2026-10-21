// Adds new uploads from your YouTube channel to content/videos.
// Reads youtubeChannelId from content/site.yml, skips videos that already have a
// file (so your written versions are never touched), and never fails the build.
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';

const root = path.resolve(import.meta.dirname, '..');
const videosDir = path.join(root, 'content', 'videos');

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const pick = (xml, tag) => decode(xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))?.[1]?.trim() ?? '');
const slugify = (s) =>
  s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_-]+/g, '-').slice(0, 60) || 'video';

async function main() {
  const site = YAML.parse(await readFile(path.join(root, 'content', 'site.yml'), 'utf8'));
  const channelId = site.youtubeChannelId?.trim();
  if (!channelId) {
    console.log('fetch-youtube: no youtubeChannelId in content/site.yml, skipping.');
    return;
  }

  const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
  if (!res.ok) throw new Error(`YouTube feed returned ${res.status}`);
  const xml = await res.text();

  const files = (await readdir(videosDir)).filter((f) => f.endsWith('.md'));
  const known = new Set();
  for (const f of files) {
    const id = (await readFile(path.join(videosDir, f), 'utf8')).match(/^youtubeId:\s*["']?([\w-]+)/m)?.[1];
    if (id) known.add(id);
  }

  let added = 0;
  for (const entry of xml.split('<entry>').slice(1)) {
    const youtubeId = pick(entry, 'yt:videoId');
    if (!youtubeId || known.has(youtubeId)) continue;
    const title = pick(entry, 'title');
    const description = pick(entry, 'media:description');
    const frontmatter = {
      title,
      youtubeId,
      date: pick(entry, 'published').slice(0, 10),
      duration: '',
      summary: description.split(/\n/)[0].slice(0, 240),
      thumbnail: '',
      draft: false,
    };
    let name = `${slugify(title)}.md`;
    if (files.includes(name)) name = `${slugify(title)}-${youtubeId}.md`;
    await writeFile(path.join(videosDir, name), `---\n${YAML.stringify(frontmatter)}---\n`);
    files.push(name);
    added++;
    console.log(`fetch-youtube: added ${name}`);
  }
  console.log(`fetch-youtube: ${added} new video(s).`);
}

main().catch((err) => {
  console.warn(`fetch-youtube: skipped (${err.message})`);
});
