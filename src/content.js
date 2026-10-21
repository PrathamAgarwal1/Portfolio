// Loads everything under /content at build time. Adding a file there (by hand or
// through /admin) is all it takes to add a project, video or find to the site.
import YAML from 'yaml';
import { marked } from 'marked';
import siteRaw from '../content/site.yml?raw';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function parseEntry(path, raw) {
  const match = raw.match(FRONTMATTER);
  const data = match ? YAML.parse(match[1]) ?? {} : {};
  const body = (match ? match[2] : raw).trim();
  const slug = path.split('/').pop().replace(/\.md$/, '');
  return { slug, ...data, body, html: body ? marked.parse(body) : '' };
}

// Drafts show up while developing (npm run dev) but never on the live site.
function loadCollection(files) {
  return Object.entries(files)
    .map(([path, raw]) => parseEntry(path, raw))
    .filter((entry) => import.meta.env.DEV || !entry.draft);
}

const byDateDesc = (a, b) => String(b.date ?? '').localeCompare(String(a.date ?? ''));

export const site = YAML.parse(siteRaw);

export const projects = loadCollection(
  import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default', eager: true }),
).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const videos = loadCollection(
  import.meta.glob('../content/videos/*.md', { query: '?raw', import: 'default', eager: true }),
).sort(byDateDesc);

export const finds = loadCollection(
  import.meta.glob('../content/finds/*.md', { query: '?raw', import: 'default', eager: true }),
).sort(byDateDesc);

export function videoThumbnail(video) {
  if (video.thumbnail) return video.thumbnail;
  if (video.youtubeId) return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
  return '';
}

export function formatDate(value) {
  if (!value) return '';
  const date = new Date(`${value}`.slice(0, 10) + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
