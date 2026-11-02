import "./Projects.css";
const demoUrl = "https://al-haitham.al-haitham.workers.dev/books?sort=newest";
export default function Projects() {
  return (
    <section id="projects" className="section container projects">
      <span className="eyebrow">↗ PROJECTS.DIR</span>
      <div className="section-intro">
        <h2 className="section-title">Less talk. More exploring.</h2>
        <p>
          A live demo of what’s possible. Open it, browse around and imagine
          what we could build for your business.
        </p>
      </div>
      <article className="project-card">
        <a
          className="project-preview"
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Al-Haitham bookstore demo in a new tab"
        >
          <div className="browser-bar">
            <span>● ● ●</span>
            <span>al-haitham / books</span>
            <span>↗</span>
          </div>
          <div className="bookstore-mockup">
            <div className="mock-brand">
              <span lang="ar" dir="rtl">
                ذخر
              </span>
              <small>THE INDEPENDENT BOOKSTORE</small>
            </div>
            <h3>The collection</h3>
            <p>Good books. New perspectives.</p>
            <div className="mock-books">
              <div className="mock-book">
                <small>THE LIBRARY</small>
                <span>✧</span>
                <strong>
                  Where the
                  <br />
                  Light Falls
                </strong>
              </div>
              <div className="mock-book">
                <small>THE LIBRARY</small>
                <span>✧</span>
                <strong>
                  The Shape
                  <br />
                  of Tomorrow
                </strong>
              </div>
              <div className="mock-book">
                <small>THE LIBRARY</small>
                <span>✧</span>
                <strong>
                  The Quiet
                  <br />
                  Garden
                </strong>
              </div>
            </div>
            <span className="preview-caption">
              Illustrated preview · Explore the live demo ↗
            </span>
          </div>
        </a>
        <div className="project-copy">
          <span className="project-status">
            <i />
            LIVE DEMO / E-COMMERCE
          </span>
          <h3>
            Al-Haitham
            <br />
            Online bookstore
          </h3>
          <p>
            A digital bookshelf for curious minds. An example of how a
            considered interface can make browsing a product catalog feel simple
            and inviting.
          </p>
          <ul className="project-features">
            <li>Book & author search</li>
            <li>Category browsing</li>
            <li>Catalog sorting</li>
            <li>Shopping cart interface</li>
          </ul>
          <a
            className="button"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore live demo <span aria-hidden="true">↗</span>
          </a>
          <a
            className="project-enquiry"
            href="mailto:reda.saad.cgt@gmail.com?subject=I%27d%20like%20a%20website%20like%20your%20bookstore%20demo"
          >
            Have something similar in mind? Let’s talk →
          </a>
        </div>
      </article>
    </section>
  );
}
