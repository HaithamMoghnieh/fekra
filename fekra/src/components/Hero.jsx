import "./Hero.css";
function StudioArtwork() {
  return (
    <div
      className="studio-art"
      role="img"
      aria-label="Illustration of a laptop turning a bright idea into code"
    >
      <svg viewBox="0 0 440 420" aria-hidden="true">
        <circle
          cx="218"
          cy="207"
          r="161"
          fill="#16131f"
          stroke="#f6dc78"
          strokeWidth="3"
          strokeDasharray="230 35 100 35"
        />
        <path
          d="M55 105l-20 18 20 18m330-36 20 18-20 18"
          fill="none"
          stroke="#ff62aa"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <g transform="rotate(-6 220 230)">
          <rect
            x="84"
            y="155"
            width="272"
            height="181"
            rx="14"
            fill="#242032"
            stroke="#b297ec"
            strokeWidth="4"
          />
          <rect x="97" y="169" width="246" height="151" rx="5" fill="#0b0b10" />
          <circle cx="113" cy="182" r="3" fill="#ff62aa" />
          <circle cx="125" cy="182" r="3" fill="#f6dc78" />
          <circle cx="137" cy="182" r="3" fill="#8dd8bc" />
          <path
            d="M122 212h45m-45 17h90m-75 17h60m-75 17h111m-96 17h45"
            stroke="#ff62aa"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M240 218l-20 20 20 20m42-40 20 20-20 20m-16-46-11 52"
            fill="none"
            stroke="#8dd8bc"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M84 336l-28 20q-5 9 10 10h312q15-1 10-10l-32-20z"
            fill="#b297ec"
            stroke="#b297ec"
            strokeWidth="3"
          />
          <path d="M177 340h85l8 9h-101z" fill="#534666" />
        </g>
        <g stroke="#f6dc78" strokeWidth="4" fill="none" strokeLinecap="round">
          <path
            d="M218 66c-31 0-48 24-35 49 6 10 14 12 15 26h38c1-14 9-16 15-26 13-25-3-49-33-49z"
            fill="#f6dc7815"
          />
          <path d="M199 152h36m-30 10h24m-11-116v-12m-54 33-10-10m118 10 10-10m-112 48h-14m124 0h14" />
        </g>
        <text
          x="62"
          y="386"
          fill="#aaa5b7"
          fontSize="12"
          fontFamily="monospace"
        >
          &lt; ideas become reality /&gt;
        </text>
        <path d="m354 61 5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="#ff62aa" />
      </svg>
      <span className="art-sticker">Made with curiosity ✦</span>
    </div>
  );
}
export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-top">
        <span className="eyebrow">// Independent digital studio · Lebanon</span>
        <span className="availability">
          <i />
          Ideas welcome here
        </span>
      </div>
      <div className="hero-layout">
        <StudioArtwork />
        <div className="hero-copy">
          <span className="hero-greeting">
            Hello, world! We’re <strong>Fekra.</strong>
          </span>
          <h1>
            We build <span>websites.</span>
            <br />
            Apps. And what’s next<span className="cursor">_</span>
          </h1>
          <p>
            From a spark of an idea to something people love to use. We bring
            design, code and a little creative obsession to your next digital
            project.
          </p>
          <p className="hero-note">
            Real people. Thoughtful solutions. A whole lot of possibility.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore our demo <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-light" href="#contact">
              Let’s talk <span aria-hidden="true">✉</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>DESIGN. DEVELOP. MAKE IT HAPPEN.</span>
        <a href="#services">Scroll to explore ↓</a>
      </div>
    </section>
  );
}
