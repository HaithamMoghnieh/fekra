import "./Skills.css";
const groups = [
  {
    title: "Web & interfaces",
    color: "pink",
    items: [
      ["⚛", "React"],
      ["TS", "TypeScript"],
      ["B", "Bootstrap"],
      ["≈", "Tailwind CSS"],
    ],
  },
  {
    title: "Mobile development",
    color: "blue",
    items: [
      ["⚛", "React Native"],
      ["F", "Flutter"],
    ],
  },
  {
    title: "Backend & languages",
    color: "yellow",
    items: [
      [".NET", "ASP.NET Core Web API"],
      ["Py", "Python"],
      ["Rs", "Rust"],
    ],
  },
  {
    title: "Data & workflow",
    color: "green",
    items: [
      ["SQL", "MySQL"],
      ["db", "SQLite"],
      ["▲", "Firebase"],
      ["⌘", "Git"],
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section container skills">
      <span className="eyebrow">✧ SKILLS.KIT</span>
      <div className="section-intro">
        <h2 className="section-title">A toolkit full of possibilities.</h2>
        <p>
          Web, mobile, APIs and data. We choose the tools that fit your project
          and bring them together.
        </p>
      </div>
      <div className="skill-groups">
        {groups.map((group) => (
          <div className={`skill-group ${group.color}`} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(([symbol, name]) => (
                <li key={name}>
                  <span aria-hidden="true">{symbol}</span>
                  <strong>{name}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
