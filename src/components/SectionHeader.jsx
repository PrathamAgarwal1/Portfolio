export default function SectionHeader({ number, title, note }) {
  return (
    <header className="section-header">
      <h2>
        <span className="section-header__number">{number}</span>
        {title}
      </h2>
      {note && <span className="section-header__note">{note}</span>}
    </header>
  );
}
