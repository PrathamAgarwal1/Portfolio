import { site } from '../content.js';
import SectionHeader from '../components/SectionHeader.jsx';

export default function About({ number }) {
  const about = site.about ?? {};
  const study = [about.university, about.degree].filter(Boolean).join(' · ');
  const when = [about.years, about.location].filter(Boolean).join(' · ');

  return (
    <section id="about" className="section section--side-lit">
      <div className="section__inner">
        <SectionHeader number={number} title="About" />
        <div className="about">
          <div className="about__portrait">
            {about.portrait ? (
              <img className="attend" src={about.portrait} alt={`Portrait of ${site.name}`} />
            ) : (
              <div className="about__portrait-empty" aria-hidden="true" />
            )}
          </div>
          <div className="about__text">
            {about.lead && <p className="about__lead">{about.lead}</p>}
            {about.bio && <p className="muted">{about.bio}</p>}
            {(study || when) && (
              <div className="about__study">
                {study && <span>{study}</span>}
                {when && <span className="faint">{when}</span>}
              </div>
            )}
            {about.skills?.length > 0 && (
              <ul className="skills">
                {about.skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            )}
            {about.cv && (
              <a className="button button--ghost" href={about.cv}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
                </svg>
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
