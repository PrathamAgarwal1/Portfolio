export default function Contents({ sections }) {
  return (
    <section id="contents" className="contents">
      <h2>Contents</h2>
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>
              <span className="contents__number">{String(i + 1).padStart(2, '0')}</span>
              <span className="contents__title">{s.title}</span>
              <span className="contents__note">{s.contentsNote()}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
