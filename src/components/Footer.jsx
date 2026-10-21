import { site } from '../content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="blindspot">
          <div className="blindspot__test" aria-hidden="true">
            <span>+</span>
            <span className="blindspot__dot" />
          </div>
          <p>
            Close your left eye, stare at the + and move slowly towards the screen. The dot vanishes into your
            blind spot, and your brain quietly paints over the hole.
          </p>
        </div>
        <div className="footer__meta">
          <span>You read this page about a tenth of a second late. Your brain edited out the delay.</span>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
