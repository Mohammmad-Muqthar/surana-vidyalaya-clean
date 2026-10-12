import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { admission } from "../data/siteContent";
import "./Navbar.styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-welcome">
            A thoughtful start to a brighter tomorrow.
          </span>
          <div className="topbar-contact">
            <a href="tel:+919108029846">
              <Phone size={14} /> <span>+91 9108029846/7</span>
            </a>
            <a href="mailto:contact@suranavidyalaya.org">
              <Mail size={14} /> <span>contact@suranavidyalaya.org</span>
            </a>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container nav-inner">
          <a
            className="brand"
            href="#top"
            onClick={close}
            aria-label="Surana Vidyalaya home"
          >
            <img src="/logo.png" alt="Surana Vidyalaya" className="brand-logo" />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            type="button"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav
            className={`nav-links ${open ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={close}>Our story</a>
            <a href="#programs" onClick={close}>
              Academics <ChevronDown size={13} />
            </a>
            <a href="#facilities" onClick={close}>
              Campus life <ChevronDown size={13} />
            </a>
            <a href="#updates" onClick={close}>What's new</a>
            <a className="nav-apply" href={admission} onClick={close}>
              Admissions <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </div>
      <div className="nav-accent" />
    </header>
  );
}
