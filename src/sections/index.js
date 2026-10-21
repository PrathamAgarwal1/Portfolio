// The home page is built from the entries in content/sections, in their `order`.
// Each entry's `type` picks a widget; "custom" sections render their own items or
// text. A section with nothing in it is skipped, so an empty Videos or Finds
// section never shows on the live site.
import { site, projects, videos, finds, sections } from '../content.js';
import Projects from './Projects.jsx';
import Videos from './Videos.jsx';
import Finds from './Finds.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Custom from './Custom.jsx';

const WIDGETS = {
  projects: {
    Component: Projects,
    isEmpty: () => projects.length === 0,
    contentsNote: () => projects.slice(0, 2).map((p) => p.title).join(', ') + (projects.length > 2 ? ' and more' : ''),
  },
  videos: {
    Component: Videos,
    isEmpty: () => videos.length === 0,
    contentsNote: () => 'watch, then read the write-up',
  },
  finds: {
    Component: Finds,
    isEmpty: () => finds.length === 0,
    contentsNote: () => 'things I found interesting',
  },
  about: {
    Component: About,
    isEmpty: () => false,
    contentsNote: () => (site.about?.cv ? 'me, education, CV' : 'me and what I work with'),
  },
  contact: {
    Component: Contact,
    isEmpty: () => false,
    contentsNote: () => 'email and links',
  },
  custom: {
    Component: Custom,
    isEmpty: (s) => s.items.length === 0 && !s.body && !s.intro,
    contentsNote: (s) => s.note || (s.items.length ? s.items.slice(0, 2).map((i) => i.title).join(', ') : ''),
  },
};

export function visibleSections() {
  return sections
    .map((s) => ({ ...s, widget: WIDGETS[s.type] ?? WIDGETS.custom }))
    .filter((s) => !s.widget.isEmpty(s))
    .map((s) => ({
      id: s.slug,
      title: s.title,
      Component: s.widget.Component,
      contentsNote: () => s.widget.contentsNote(s),
      section: s,
    }));
}
