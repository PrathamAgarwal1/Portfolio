import { Link, useParams } from 'react-router-dom';
import { videos, videoThumbnail, formatDate } from '../content.js';

export default function VideoPage() {
  const { slug } = useParams();
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return (
      <main className="article">
        <Link to="/#videos" className="back-link">← All videos</Link>
        <h1 className="article__title">That video isn't here.</h1>
      </main>
    );
  }

  const thumb = videoThumbnail(video);
  return (
    <main className="article">
      <Link to="/#videos" className="back-link">← All videos</Link>
      <span className="eyebrow eyebrow--plain">{[formatDate(video.date), video.duration].filter(Boolean).join(' · ')}</span>
      <h1 className="article__title">{video.title}</h1>
      {video.summary && <p className="article__summary">{video.summary}</p>}
      <div className="embed">
        {video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : thumb ? (
          <img src={thumb} alt="" />
        ) : (
          <div className="thumb__empty" />
        )}
      </div>
      {video.html ? (
        <div className="prose" dangerouslySetInnerHTML={{ __html: video.html }} />
      ) : (
        <p className="muted">The written version of this video is on its way.</p>
      )}
    </main>
  );
}
