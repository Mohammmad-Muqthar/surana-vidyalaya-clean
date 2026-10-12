import { ArrowUpRight } from "lucide-react";
import { instagram, photos } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./InstagramSection.styles.css";

const images = [photos.primary, photos.kinder, photos.team, photos.sports];

function InstagramMark({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section className="section social-section">
      <div className="container">
        <div className="social-heading-row">
          <SectionHeading eyebrow="From our school community" title={<>A little window into <em>our world.</em></>} text="Everyday moments of learning, friendship and shared achievement." />
          <a className="button button-outline" href={instagram} target="_blank" rel="noopener noreferrer"><InstagramMark size={17} /> Follow along <ArrowUpRight size={16} /></a>
        </div>
        <div className="social-profile"><span className="profile-mark">SV</span><div><strong>@suranavidyalaya</strong><p>Learning, growing and celebrating together.</p></div></div>
        <div className="social-grid">
          {images.map((src, index) => (
            <a href={instagram} target="_blank" rel="noopener noreferrer" key={`${src}-${index}`} aria-label={`View school social post ${index + 1}`}>
              <img src={src} alt={`Surana Vidyalaya school life ${index + 1}`} loading="lazy" />
              <span><ArrowUpRight size={19} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
