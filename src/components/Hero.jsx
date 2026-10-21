import { site } from '../content.js';
import { VISION_MODES } from './VisionFilters.jsx';

export default function Hero({ vision, onVisionChange }) {
  const current = VISION_MODES.find((m) => m.id === vision);

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <h1 className="hero__headline resolve">{site.headline}</h1>
        <p className="hero__sub rise delay-1">{site.subheadline}</p>
        <div className="hero__me rise delay-2">
          <span className="hero__name">I'm {site.name}.</span>
          <span className="hero__intro">{site.intro}</span>
        </div>
        <div className="vision rise delay-3">
          <span className="eyebrow">See this page as</span>
          <div className="vision__buttons" role="group" aria-label="See this page through another animal's eyes">
            {VISION_MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                className="pill"
                aria-pressed={m.id === vision}
                onClick={() => onVisionChange(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <div className="spectrum" role="img" aria-label="The visible spectrum, from 380 to 700 nanometres" />
          <p className="vision__caption">{current.caption}</p>
        </div>
        <a href="#contents" className="begin">
          Begin
          <span className="begin__line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
