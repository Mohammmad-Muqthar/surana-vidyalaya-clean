import { useState } from "react";
import { ArrowRight, ArrowUpRight, BellRing } from "lucide-react";
import { circulars, achievements, school } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./Updates.styles.css";

export default function Updates() {
  const [tab, setTab] = useState("circulars");
  const items = tab === "circulars" ? circulars : achievements;
  return <section className="section updates-section" id="updates"><div className="container">
    <div className="updates-heading-row"><SectionHeading eyebrow="From our community" title={<>Good things are <em>happening here.</em></>} text="School notices, important announcements and moments from our learning community." /><a className="section-action" href={school}>Visit notice board <ArrowUpRight size={17} /></a></div>
    <div className="updates-panel"><div className="updates-panel-head"><span className="updates-panel-icon"><BellRing size={20} /></span><div><strong>School notice board</strong><small>Stay connected with what’s happening</small></div><div className="update-tabs"><button className={tab === "circulars" ? "active" : ""} onClick={() => setTab("circulars")}>Notices</button><button className={tab === "achievements" ? "active" : ""} onClick={() => setTab("achievements")}>Highlights</button></div></div>
      <div className="update-grid">{items.map((item) => <a href={school} className="update-card" key={item.title}><span className={`update-icon ${item.color}`}><BellRing size={18} /></span><span className="update-copy"><small>{item.type}</small><strong>{item.title}</strong><span>{item.date}</span></span><span className="update-arrow"><ArrowRight size={17} /></span></a>)}</div>
    </div>
  </div></section>;
}
