// The home page is built from these widgets, in the order listed under
// `sections` in content/site.yml. A widget with nothing in it is skipped, so an
// empty Videos or Finds section never shows on the live site.
import { site, projects, videos, finds } from '../content.js';
import Projects from './Projects.jsx';
import Videos from './Videos.jsx';
import Finds from './Finds.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

const WIDGETS = {
  projects: {
    title: 'Projects',
    Component: Projects,
    isEmpty: () => projects.length === 0,
    contentsNote: () => projects.slice(0, 2).map((p) => p.title).join(', ') + (projects.length > 2 ? ' and more' : ''),
  },
  videos: {
    title: 'Videos',
    Component: Videos,
    isEmpty: () => videos.length === 0,
    contentsNote: () => 'watch, then read the write-up',
  },
  finds: {
    title: 'Finds',
    Component: Finds,
    isEmpty: () => finds.length === 0,
    contentsNote: () => 'things I found interesting',
  },
  about: {
    title: 'About',
    Component: About,
    isEmpty: () => false,
    contentsNote: () => (site.about?.cv ? 'me, education, CV' : 'me and what I work with'),
  },
  contact: {
    title: 'Contact',
    Component: Contact,
    isEmpty: () => false,
    contentsNote: () => 'email and links',
  },
};

export function visibleSections() {
  return (site.sections ?? [])
    .filter((id) => WIDGETS[id] && !WIDGETS[id].isEmpty())
    .map((id) => ({ id, ...WIDGETS[id] }));
}
