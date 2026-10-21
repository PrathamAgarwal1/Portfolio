import { finds, formatDate } from '../content.js';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Finds({ number }) {
  return (
    <section id="finds" className="section section--lit">
      <div className="section__inner">
        <SectionHeader number={number} title="Finds" note="Things I came across and couldn't stop thinking about." />
        <div className="card-grid">
          {finds.map((f) => (
            <article key={f.slug} className="card find">
              {f.image && <img className="find__image attend" src={f.image} alt="" />}
              <span className="eyebrow eyebrow--plain">{[f.kind, formatDate(f.date)].filter(Boolean).join(' · ')}</span>
              <span className="card__title">{f.title}</span>
              {f.html && <div className="muted find__take" dangerouslySetInnerHTML={{ __html: f.html }} />}
              {f.url && <a className="card__more" href={f.url}>Open →</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
