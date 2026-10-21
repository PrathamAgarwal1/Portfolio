import { Link, useParams } from 'react-router-dom';
import { projects } from '../content.js';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="article">
        <Link to="/#projects" className="back-link">← All projects</Link>
        <h1 className="article__title">That project isn't here.</h1>
      </main>
    );
  }

  return (
    <main className="article">
      <Link to="/#projects" className="back-link">← All projects</Link>
      <span className="eyebrow eyebrow--plain">{project.tag}</span>
      <h1 className="article__title">{project.title}</h1>
      <p className="article__summary">{project.summary}</p>
      {project.stats?.length > 0 && (
        <div className="stats">
          {project.stats.map((s, i) => (
            <div key={s.label}>
              <div className={`stats__value${i === 0 ? ' is-accent' : ''}`}>{s.value}</div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      )}
      {project.links?.length > 0 && (
        <div className="button-row">
          {project.links.map((l, i) => (
            <a key={l.url} className={`button ${i === 0 ? 'button--light' : 'button--ghost'}`} href={l.url}>{l.label}</a>
          ))}
        </div>
      )}
      {project.image && <img className="article__hero attend" src={project.image} alt={`${project.title} screenshot`} />}
      <div className="prose" dangerouslySetInnerHTML={{ __html: project.html }} />
    </main>
  );
}
