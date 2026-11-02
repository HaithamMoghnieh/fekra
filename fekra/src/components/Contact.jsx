import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-top">
          <span className="eyebrow">04 / Your next chapter</span>
          <span className="contact-spark" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="contact-layout">
          <div>
            <h2>
              Got an idea?
              <br />
              Let’s make it <em>real.</em>
            </h2>
            <p>
              A new website, an ambitious app, or a question you’re still
              figuring out. We’d love to hear it.
            </p>
            <a
              className="button button-light"
              href="mailto:reda.saad.cgt@gmail.com?subject=Let%E2%80%99s%20discuss%20a%20project"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-links">
            <a href="mailto:reda.saad.cgt@gmail.com">
              <span>Email us</span>
              <strong>reda.saad.cgt@gmail.com</strong>
              <b aria-hidden="true">↗</b>
            </a>
            <a
              href="https://wa.me/96170362287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Chat on WhatsApp</span>
              <strong>+961 70 362 287</strong>
              <b aria-hidden="true">↗</b>
            </a>
            <a href="tel:+96181193346">
              <span>Give us a call</span>
              <strong>+961 81 193 346</strong>
              <b aria-hidden="true">↗</b>
            </a>
            <p>Based in Lebanon. Building beyond borders.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
