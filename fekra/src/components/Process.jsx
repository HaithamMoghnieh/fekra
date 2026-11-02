import "./Process.css";
const steps = [
  [
    "Discover",
    "First, we listen. We get to know your business, your audience and what success looks like for you.",
  ],
  [
    "Design",
    "We give your idea a clear direction, shaping the experience before moving into the details.",
  ],
  [
    "Develop",
    "We bring it all together with careful development, testing and refinement across devices.",
  ],
  [
    "Launch & beyond",
    "We help you go live with confidence, with ongoing care available as your business evolves.",
  ],
];
export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <span className="eyebrow">03 / How we work</span>
        <div className="section-intro">
          <h2 className="section-title">
            A clear path.
            <br />
            From idea to impact.
          </h2>
          <p>
            No unnecessary complexity. Just an open, collaborative process that
            keeps you involved at every step.
          </p>
        </div>
        <ol className="process-steps">
          {steps.map(([title, description], index) => (
            <li key={title}>
              <div className="step-marker">
                <span>0{index + 1}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
