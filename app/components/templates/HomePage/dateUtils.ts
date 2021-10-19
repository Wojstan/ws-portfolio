export const about = ` I am constantly developing in the latest frontend technologies. In
the future I would like to work as frontend developer and specialize
in React.js. I am passionate about creating and implementing web
projects, I work well in a group and really want to get some
professional experience. Besides, I love Premier League games, good
music and Tarrantino movies.`;

export function monthDiff(d1: Date, d2: Date): number {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
