import { Link } from 'react-router-dom';
import { site, videos, videoThumbnail, formatDate } from '../content.js';
import SectionHeader from '../components/SectionHeader.jsx';

function Thumbnail({ video, large }) {
  const src = videoThumbnail(video);
  return (
    <div className={`thumb attend${large ? ' thumb--large' : ''}`}>
      {src ? <img src={src} alt="" /> : <div className="thumb__empty" />}
      {large && (
        <span className="thumb__play" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
      )}
    </div>
  );
}

const meta = (v) => [formatDate(v.date), v.duration].filter(Boolean).join(' · ');

export default function Videos({ number }) {
  const [latest, ...older] = videos;
  const watchUrl = (v) => (v.youtubeId ? `https://www.youtube.com/watch?v=${v.youtubeId}` : site.links?.youtube);

  return (
    <section id="videos" className="section">
      <div className="section__inner">
        <SectionHeader number={number} title="Videos" note="Every video comes with a written version." />

        <article className="featured featured--video">
          <Link to={`/videos/${latest.slug}`} className="featured__media">
            <Thumbnail video={latest} large />
          </Link>
          <div className="featured__text">
            <span className="eyebrow eyebrow--plain">latest · {meta(latest)}</span>
            <h3 className="featured__title featured__title--small">{latest.title}</h3>
            {latest.summary && <p className="muted">{latest.summary}</p>}
            <div className="button-row">
              {watchUrl(latest) && <a className="button button--light" href={watchUrl(latest)}>Watch</a>}
              <Link className="button button--ghost" to={`/videos/${latest.slug}`}>Read the write-up</Link>
            </div>
          </div>
        </article>

        {older.length > 0 && (
          <div className="card-grid card-grid--videos">
            {older.slice(0, 6).map((v) => (
              <Link key={v.slug} to={`/videos/${v.slug}`} className="video-card">
                <Thumbnail video={v} />
                <span className="eyebrow eyebrow--plain">{meta(v)}</span>
                <span className="video-card__title">{v.title}</span>
              </Link>
            ))}
          </div>
        )}

        {site.links?.youtube && (
          <a className="accent-link" href={site.links.youtube}>All videos on YouTube →</a>
        )}
      </div>
    </section>
  );
}
