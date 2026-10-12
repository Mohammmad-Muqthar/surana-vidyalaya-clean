import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { admission, instagram, school } from "../data/siteContent";
import "./Footer.css";

function InstagramMark({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="footer-cta-copy">
            <p className="footer-eyebrow">Your next chapter starts here</p>
            <h2>Come see what <em>learning can be.</em></h2>
          </div>
          <a className="footer-cta-button" href={admission}>
            Explore admissions <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-about">
            <a className="footer-brand" href="#top" aria-label="Surana Vidyalaya home">
              <img
                src="/logo.png"
                alt="Surana Vidyalaya"
                className="footer-logo"
                loading="lazy"
              />
            </a>

            <p className="footer-description">
              A school community where curiosity is welcomed, individuality is
              valued and every child is encouraged to flourish.
            </p>

            <a
              className="footer-social"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Surana Vidyalaya on Instagram"
            >
              <InstagramMark size={17} />
              Follow our journey <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="footer-col">
            <h3>Discover</h3>
            <a href="#about">Our story</a>
            <a href="#programs">Learning pathways</a>
            <a href="#facilities">Campus &amp; facilities</a>
            <a href="#gallery">School life</a>
          </div>

          <div className="footer-col">
            <h3>For families</h3>
            <a href={admission}>Admissions <ArrowUpRight size={13} /></a>
            <a href="#updates">School notices</a>
            <a href="#events">Events &amp; calendar</a>
            <a href={school} target="_blank" rel="noopener noreferrer">
              Official website <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="footer-col footer-contact">
            <h3>Let's connect</h3>
            <p><MapPin size={16} /><span>Chandapura, Bengaluru, Karnataka</span></p>
            <a href="tel:+919108029846"><Phone size={16} /><span>+91 9108029846/7</span></a>
            <a href="mailto:contact@suranavidyalaya.org">
              <Mail size={16} /><span>contact@suranavidyalaya.org</span>
            </a>
            <a
              className="map-link"
              href="https://maps.google.com/?q=Surana+Vidyalaya+Chandapura"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on the map <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Surana Vidyalaya. All rights reserved.</span>
          <span>Made for curious minds.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
