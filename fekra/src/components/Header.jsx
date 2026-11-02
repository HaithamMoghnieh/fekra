import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header" id="top">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Fekra home">
          <img src={logo} alt="Fekra" />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
          onClick={() => setOpen(false)}
        >
          <a href="#top">
            <span aria-hidden="true">⌂</span>Home
          </a>
          <a href="#services">
            <span aria-hidden="true">⚙</span>Services
          </a>
          <a href="#skills">
            <span aria-hidden="true">✧</span>Skills
          </a>
          <a href="#projects">
            <span aria-hidden="true">↗</span>Projects
          </a>
          <a href="#about">
            <span aria-hidden="true">☺</span>Studio
          </a>
          <a className="nav-cta" href="#contact">
            <span aria-hidden="true">✉</span> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
