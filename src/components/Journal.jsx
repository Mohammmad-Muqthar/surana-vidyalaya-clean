import { ArrowUpRight } from 'lucide-react';
import { articles, imageUrl } from '../data/siteContent';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Journal() {
  return <section className="journal-section section-pad" id="journal">
    <div className="section-inner">
      <Reveal><SectionHeading eyebrow="IDEAS FOR THE JOURNEY" title={<>A little reading<br />for <em>the road ahead.</em></>} text="Thoughtful perspectives for families, from choosing a school to helping children thrive." index="07 — JOURNAL" /></Reveal>
      <div className="journal-grid">{articles.map((article, i) => <Reveal key={article.title} delay={i * 0.08} className="journal-card"><a href="https://suranavidyalaya.org/blog/"><div className="journal-image"><img src={imageUrl(article.image, 900)} alt="" loading="lazy" /><span><ArrowUpRight size={18} /></span></div><div className="journal-content"><small>{article.category}</small><h3>{article.title}</h3><span className="journal-read">Read article <ArrowUpRight size={15} /></span></div></a></Reveal>)}</div>
      <div className="journal-bottom"><span>Curiosity doesn’t end at the classroom door.</span><a className="text-link" href="https://suranavidyalaya.org/blog/">Visit the blog <ArrowUpRight size={17} /></a></div>
    </div>
  </section>;
}
