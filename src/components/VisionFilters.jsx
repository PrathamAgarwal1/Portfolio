// Colour-vision approximations used by the "See this page as" switch. They're
// impressions of other animals' vision, not exact simulations.
export const VISION_MODES = [
  {
    id: 'human',
    label: 'Human',
    filter: 'none',
    caption: 'Three kinds of cone. You call this "normal". It’s just one way of reading the light.',
  },
  {
    id: 'dog',
    label: 'Dog',
    filter: 'url(#vision-dog)',
    caption: 'Two kinds of cone. Reds and greens collapse into the same muddy yellow.',
  },
  {
    id: 'bee',
    label: 'Bee',
    filter: 'url(#vision-bee)',
    caption: 'No red at all, but ultraviolet you can’t see. Flowers carry patterns invisible to you.',
  },
  {
    id: 'shrimp',
    label: 'Mantis shrimp',
    filter: 'url(#vision-shrimp)',
    caption: 'Around twelve kinds of colour receptor. Nobody knows what its world is like. This is only a guess.',
  },
];

export default function VisionFilters() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
        <filter id="vision-dog">
          <feColorMatrix type="matrix" values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0" />
        </filter>
        <filter id="vision-bee">
          <feColorMatrix type="matrix" values="0 0.25 0.1 0 0  0 1 0 0 0  0.35 0 1.15 0 0  0 0 0 1 0" />
        </filter>
        <filter id="vision-shrimp">
          <feColorMatrix type="saturate" values="3.2" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.25" intercept="-0.06" />
            <feFuncG type="linear" slope="1.25" intercept="-0.06" />
            <feFuncB type="linear" slope="1.25" intercept="-0.06" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
