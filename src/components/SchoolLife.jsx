import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { events, gallery, imageUrl } from '../data/siteContent';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function GalleryTile({ item, index }) {
  const tileRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: tileRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);

  return (
    <motion.div
      ref={tileRef}
      className={`life-gallery-item gallery-item-${index + 1}`}
      initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(0 48% 0 48%)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0%)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img style={{ y: reduceMotion ? 0 : imageY }} src={imageUrl(item.image, 1000)} alt={item.label} loading="lazy" />
      <span className="gallery-caption">{item.label}</span>
    </motion.div>
  );
}

export default function SchoolLife() {
  return <section className="school-life-section section-pad" id="school-life">
    <div className="section-inner">
      <Reveal><SectionHeading eyebrow="LIFE AT SURANA" title={<>A school community<br /><em>full of life.</em></>} text="From Annual Days to Science Fairs, school life is vibrant and enriching." /></Reveal>
      <div className="life-gallery" id="gallery">{gallery.map((item, i) => <GalleryTile key={item.label} item={item} index={i} />)}</div>
      <div className="events-block">
        <div className="events-heading"><div><p className="eyebrow">LATEST EVENTS</p><h3>School life & <em>events</em></h3></div><a className="text-link" href="https://suranavidyalaya.org/events/">View all events <ArrowUpRight size={17} /></a></div>
        <div className="events-grid">{events.map((event, i) => <Reveal key={`${event.title}-${i}`} delay={i * 0.06} className="event-card"><div className="event-image"><img src={imageUrl(event.image, 800)} alt={event.title} loading="lazy" /></div><div className="event-copy"><small>{event.date} <i>·</i> {event.time}</small><h4>{event.title}</h4><a href="https://suranavidyalaya.org/events/" aria-label={`Event details: ${event.title}`}><ArrowUpRight size={17} /></a></div></Reveal>)}</div>
      </div>
    </div>
  </section>;
}
