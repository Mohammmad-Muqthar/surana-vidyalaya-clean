import { Quote } from "lucide-react";
import { leaders } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./Leadership.css";

export default function Leadership() {
  return <section className="section leadership-section"><div className="container">
    <SectionHeading eyebrow="People who inspire us" title={<>A shared vision. <em>A brighter future.</em></>} text="Our leadership team is united by a belief in the potential of every child." />
    <div className="leader-grid">{leaders.map((leader) => <article className={`leader-card leader-${leader.color}`} key={leader.name}><Quote size={28} className="leader-quote" /><p>{leader.text}</p><div className="leader-person"><span>{leader.initials}</span><div><strong>{leader.name}</strong><small>{leader.role}</small></div></div></article>)}</div>
  </div></section>;
}
