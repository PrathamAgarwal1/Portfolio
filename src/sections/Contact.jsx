import { site } from '../content.js';

export default function Contact({ number }) {
  const contact = site.contact ?? {};
  const links = [
    ['YouTube', site.links?.youtube],
    ['GitHub', site.links?.github],
    ['LinkedIn', site.links?.linkedin],
  ].filter(([, url]) => url);

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <span className="contact__number">{number} · Contact</span>
        <h2>{contact.heading}</h2>
        {contact.text && <p className="muted">{contact.text}</p>}
        <a className="button button--accent" href={`mailto:${contact.email}`}>{contact.email}</a>
        <span className="caption">↑ 590 nm. Your brain calls it amber.</span>
        <div className="link-row link-row--center">
          {links.map(([label, url]) => <a key={label} href={url}>{label}</a>)}
        </div>
      </div>
    </section>
  );
}
