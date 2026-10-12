import { ArrowUpRight, BookOpen, Calculator, FlaskConical, HeartHandshake, Monitor, Trophy } from "lucide-react";
import { facilities, school } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./Facilities.styles.css";

const iconMap = { book: BookOpen, calculator: Calculator, flask: FlaskConical, monitor: Monitor, trophy: Trophy, heart: HeartHandshake };

export default function Facilities() {
  return <section className="section facilities-section" id="facilities">
    <div className="facilities-decor facilities-decor-one" /><div className="facilities-decor facilities-decor-two" />
    <div className="container">
      <div className="facilities-intro">
        <div><SectionHeading eyebrow="Campus & community" title={<>World-class <em>facilities</em></>} text="Designed to spark curiosity, encourage exploration and make every school day a chance to discover something new." light /></div>
        <p className="facilities-side-note">More than spaces — these are places where ideas take shape, friendships grow and confidence is built.</p>
      </div>
      <div className="facility-grid">
        {facilities.map((item) => { const Icon = iconMap[item.icon]; return <article className={`facility-card facility-${item.color}`} key={item.title}>
          <div className="facility-card-top"><span className="facility-icon"><Icon size={25} strokeWidth={1.7} /></span><span className="facility-arrow"><ArrowUpRight size={18} /></span></div>
          <h3>{item.title}</h3><p>{item.text}</p><a href={school} className="facility-link">Discover more</a>
        </article>; })}
      </div>
    </div>
  </section>;
}
