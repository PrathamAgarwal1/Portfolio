import Hero from '../components/Hero.jsx';
import Contents from '../components/Contents.jsx';
import { visibleSections } from '../sections/index.js';

export default function Home({ vision, onVisionChange }) {
  const sections = visibleSections();
  return (
    <main>
      <Hero vision={vision} onVisionChange={onVisionChange} />
      <Contents sections={sections} />
      {sections.map(({ id, Component }, i) => (
        <Component key={id} number={String(i + 1).padStart(2, '0')} />
      ))}
    </main>
  );
}
