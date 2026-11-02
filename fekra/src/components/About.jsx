import "./About.css";
export default function About() {
  return (
    <section id="about" className="section container about">
      <div className="about-art">
        <span className="eyebrow">The meaning behind the name</span>
        <div lang="ar" dir="rtl" className="arabic-word">
          فكرة
        </div>
        <div className="definition">
          <strong>fekra</strong>
          <span>
            / fik·ra / <i>noun</i>
          </span>
          <p>
            An idea. A thought. The beginning
            <br />
            of something worth building.
          </p>
        </div>
        <span className="about-art-foot">
          ROOTED IN CURIOSITY. DRIVEN BY POSSIBILITY.
        </span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">02 / The studio</span>
        <h2 className="section-title">
          A small team.
          <br />A bigger perspective.
        </h2>
        <p>
          Behind every great digital product is a simple idea. Ours is that good
          work starts with understanding the people it’s built for.
        </p>
        <p>
          We’re an independent studio bringing design and development together.
          We work closely with you, ask the right questions, and give your
          project the care it deserves.
        </p>
        <div className="principles">
          <div>
            <span>01</span>Direct collaboration
          </div>
          <div>
            <span>02</span>Thoughtful execution
          </div>
          <div>
            <span>03</span>Built for the long run
          </div>
        </div>
        <a href="#contact" className="text-link">
          Meet your next creative partner <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

