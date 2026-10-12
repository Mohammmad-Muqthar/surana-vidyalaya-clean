import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { slides, contact } from "../data/siteContent";
import "./Hero.styles.css";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <section className={`hero hero-${slide.tone}`} id="top">
      <div className="hero-backdrop" aria-hidden="true">
        {slides.map((item, index) => <div key={item.kicker} className={`hero-image ${index === active ? "hero-image-active" : ""}`} style={{ backgroundImage: `url(${item.image})` }} />)}
      </div>
      <div className="hero-shade" />
      <div className="hero-shape hero-shape-one" /><div className="hero-shape hero-shape-two" />
      <div className="container hero-inner">
        <div className="hero-copy" key={slide.kicker}>
          <p className="hero-kicker"><span />{slide.kicker}</p>
          <h1>{slide.title[0]}<em>{slide.title[1]}</em></h1>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-actions">
            <a className="button button-coral" href={contact}>Plan a school visit <ArrowUpRight size={17} /></a>
            <a className="hero-text-link" href="#about">Get to know us <ArrowRight size={17} /></a>
          </div>
        </div>
        <div className="hero-controls">
          <div className="hero-progress">{slides.map((item, index) => <button key={item.kicker} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`}><span /></button>)}</div>
          <button className="hero-play" onClick={() => setPaused(!paused)} aria-label={paused ? "Play carousel" : "Pause carousel"}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>
          <button className="hero-next" onClick={next} aria-label="Next slide"><ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
