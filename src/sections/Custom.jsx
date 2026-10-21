import { formatDate } from '../content.js';
import SectionHeader from '../components/SectionHeader.jsx';

function Meta({ item }) {
  const meta = [item.label, formatDate(item.date)].filter(Boolean).join(' · ');
  return meta ? <span className="eyebrow eyebrow--plain">{meta}</span> : null;
}

function Cards({ items }) {
  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article key={i} className="card">
          {item.image && <img className="find__image attend" src={item.image} alt="" />}
          <Meta item={item} />
          <span className="card__title">{item.title}</span>
          {item.html && <div className="muted find__take" dangerouslySetInnerHTML={{ __html: item.html }} />}
          {item.link && <a className="card__more" href={item.link}>Open →</a>}
        </article>
      ))}
    </div>
  );
}

function List({ items }) {
  return (
    <ol className="entry-list">
      {items.map((item, i) => (
        <li key={i} className="entry">
          <div className="entry__meta"><Meta item={item} /></div>
          <div className="entry__body">
            <span className="entry__title">
              {item.link ? <a href={item.link}>{item.title}</a> : item.title}
            </span>
            {item.html && <div className="muted find__take" dangerouslySetInnerHTML={{ __html: item.html }} />}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Custom({ id, section, number }) {
  const layout = section.layout || 'cards';
  return (
    <section id={id} className={`section${number % 2 ? ' section--lit' : ''}`}>
      <div className="section__inner">
        <SectionHeader number={number} title={section.title} note={section.note} />
        {section.intro && <p className="section__intro">{section.intro}</p>}
        {section.html && <div className="prose section__prose" dangerouslySetInnerHTML={{ __html: section.html }} />}
        {section.items.length > 0 && (layout === 'list' ? <List items={section.items} /> : <Cards items={section.items} />)}
      </div>
    </section>
  );
}
