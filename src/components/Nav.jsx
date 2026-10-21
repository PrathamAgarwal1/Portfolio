import { Link } from 'react-router-dom';
import { site } from '../content.js';
import { visibleSections } from '../sections/index.js';

export default function Nav() {
  return (
    <header className="nav">
      <nav aria-label="Main" className="nav__inner">
        <Link to="/" className="nav__name">{site.name}</Link>
        <div className="nav__links">
          <Link to="/#contents">Contents</Link>
          {visibleSections().map((s) => (
            <Link key={s.id} to={`/#${s.id}`}>{s.title}</Link>
          ))}
          {site.about?.cv && <a href={site.about.cv}>CV</a>}
        </div>
      </nav>
    </header>
  );
}
