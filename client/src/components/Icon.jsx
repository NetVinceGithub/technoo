const paths = {
  brain: "M12 4a4 4 0 0 0-4 4v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a4 4 0 0 0 4 4m0-16a4 4 0 0 1 4 4v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a4 4 0 0 1-4 4m0-16v16",
  bolt: "m13 2-8 12h6l-1 8 8-12h-6l1-8Z",
  links: "M10 13a5 5 0 0 0 7.07.07l2-2A5 5 0 0 0 12 4m2 7a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20",
  shield: "M12 3 5 6v5c0 4.42 2.99 8.54 7 9.7 4.01-1.16 7-5.28 7-9.7V6l-7-3Z",
  chart: "M4 19V9m6 10V5m6 14v-7m4 7V3",
  team: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
};

export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
