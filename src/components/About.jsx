import { ArrowUpRight, Leaf, Sparkles } from "lucide-react";
import { photos, school } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./about.css";

export default function About() {
  return <section className="section about-section" id="about"><div className="container about-grid">
    <div className="about-visual"><div className="about-image-main"><img src={photos.campus} alt="School campus" loading="lazy" /></div><div className="about-image-note"><span><Leaf size={22} /></span><div><strong>Rooted in values</strong><small>Growing through discovery</small></div></div><div className="about-orbit" aria-hidden="true"><Sparkles size={28} /></div></div>
    <div className="about-copy">
      <SectionHeading eyebrow="The Surana story" title={<>An education that goes <em>beyond the classroom.</em></>} text="At Surana Vidyalaya, learning is a journey of discovery. We create space for every student to ask questions, develop strengths and grow into a thoughtful, confident individual." />
      <p className="body-copy">Guided by the values of the GDA Foundation, our approach brings together academic foundations, creativity, wellbeing and a genuine sense of community.</p>
      <a className="inline-link" href={school}>Explore our philosophy <ArrowUpRight size={17} /></a>
    </div>
  </div></section>;
}
