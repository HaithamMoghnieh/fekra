import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import logo from "./assets/logo.png";
import "./App.css";
const currentYear = new Date().getFullYear();
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <footer className="container footer">
        <a className="brand" href="#top" aria-label="Fekra home">
          <img src={logo} alt="Fekra" />
        </a>
        <p>Independent thinking. Purposeful technology.</p>
        <a href="#top">Back to top ↑</a>
        <small>© {currentYear} Fekra. All rights reserved.</small>
      </footer>
    </>
  );
}

