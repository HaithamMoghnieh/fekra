import "./Services.css";
const services = [
  {
    title: "Web development",
    icon: "⌘",
    description:
      "Your business, at its best online. Fast, intuitive websites and custom platforms that make a lasting impression.",
    tags: ["Business websites", "Web applications", "E-commerce"],
  },
  {
    title: "Mobile applications",
    icon: "▯",
    description:
      "Be where your customers are. Thoughtful mobile experiences that turn everyday interactions into lasting connections.",
    tags: ["iOS & Android", "Cross-platform", "Custom applications"],
  },
  {
    title: "UI / UX design",
    icon: "◈",
    description:
      "Clarity in every click. We turn complex ideas into considered interfaces that feel natural from the very first use.",
    tags: ["User experience", "Interface design", "Prototyping"],
  },
  {
    title: "Care & maintenance",
    icon: "↻",
    description:
      "Launch is the beginning. Keep your website secure, up to date and ready for whatever comes next.",
    tags: ["Ongoing support", "Performance", "Website updates"],
  },
];
export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="eyebrow">01 / What we do</span>
        <div className="section-intro">
          <h2 className="section-title">
            The right thinking.
            <br />
            The right technology.
          </h2>
          <p>
            Everything your digital presence needs.
            <br />
            One team that sees the whole picture.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <div className="service-top">
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="service-index">0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                href={`mailto:reda.saad.cgt@gmail.com?subject=${encodeURIComponent(`Project enquiry: ${service.title}`)}`}
                className="service-link"
              >
                Let’s discuss {service.title.toLowerCase()}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
