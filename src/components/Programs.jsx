import { ArrowUpRight } from "lucide-react";
import { photos, school } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./Programs.styles.css";

const programs = [
  { title: "Early Years", level: "NURSERY – UKG", text: "A warm, playful beginning where curiosity comes naturally.", src: photos.kinder, tone: "coral" },
  { title: "Primary School", level: "CLASSES I – V", text: "Strong foundations built through exploration and creativity.", src: photos.primary, tone: "blue" },
  { title: "Middle & High School", level: "CLASSES VI – X", text: "Independent thinking, deeper learning and future readiness.", src: photos.high, tone: "green" }
];

export default function Programs() {
  return <section className="section programs-section" id="programs"><div className="container">
    <SectionHeading eyebrow="Learning pathways" title={<>Every stage has its <em>own possibilities.</em></>} text="Our learning journey evolves with students — supporting their confidence, capability and sense of purpose at every age." />
    <div className="program-grid">{programs.map((item) => <a className={`program-card program-${item.tone}`} href={school} key={item.title}>
      <div className="program-image"><img src={item.src} alt={item.title} loading="lazy" /></div><div className="program-card-copy"><span className="program-level">{item.level}</span><h3>{item.title}</h3><p>{item.text}</p><span className="program-link">Explore pathway <ArrowUpRight size={17} /></span></div>
    </a>)}</div>
  </div></section>;
}
