import { Link } from 'react-router-dom';
import { projects } from '../content.js';
import SectionHeader from '../components/SectionHeader.jsx';

function Stats({ stats }) {
  if (!stats?.length) return null;
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div key={s.label}>
          <div className={`stats__value${i === 0 ? ' is-accent' : ''}`}>{s.value}</div>
          <div className="stats__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Projects({ id, section, number }) {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id={id} className="section section--lit">
      <div className="section__inner">
        <SectionHeader number={number} title={section.title} note={section.note} />

        {featured && (
          <article className="featured">
            {featured.image && (
              <Link to={`/projects/${featured.slug}`} className="featured__media">
                <img className="attend" src={featured.image} alt={`${featured.title} screenshot`} />
              </Link>
            )}
            <div className="featured__text">
              <span className="eyebrow eyebrow--plain">featured · {featured.tag}</span>
              <h3 className="featured__title">{featured.title}</h3>
              <p className="muted">{featured.summary}</p>
              <Stats stats={featured.stats} />
              <div className="link-row">
                <Link to={`/projects/${featured.slug}`} className="accent-link">Read more →</Link>
                {featured.links?.map((l) => <a key={l.url} href={l.url}>{l.label}</a>)}
              </div>
            </div>
          </article>
        )}

        <div className="card-grid">
          {rest.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="card">
              <span className="eyebrow eyebrow--plain">{p.tag}</span>
              <span className="card__title">{p.title}</span>
              <span className="muted">{p.summary}</span>
              <span className="card__more">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
