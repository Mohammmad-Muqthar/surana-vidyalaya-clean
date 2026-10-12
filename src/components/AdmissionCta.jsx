import { ArrowUpRight } from 'lucide-react';
import { imageUrl } from '../data/siteContent';
import Reveal from './Reveal';

export default function AdmissionCta() {
  return <section className="admission-cta section-pad">
    <Reveal className="admission-card">
      <img src={imageUrl('photo-1503676260728-1c00da094a0b', 1800)} alt="Students learning together at school" loading="lazy" />
      <div className="admission-overlay" />
      <div className="admission-content"><p className="eyebrow eyebrow-light">ADMISSIONS OPEN · 2026–27</p><h2>The future starts<br />with what they <em>learn today.</em></h2><p>Admissions for 2026–27 are now open.</p><a className="button button-accent" href="https://suranavidyalaya.org/admission/">Apply for admission <ArrowUpRight size={18} /></a></div>
      <div className="admission-corner">SURANA<br />VIDYALAYA</div>
    </Reveal>
  </section>;
}
