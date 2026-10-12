import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { photos, school } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./events.css";

const events = [
  { day: "22", month: "OCT", title: "Annual Sports Day", time: "School event", tag: "Move & play", src: photos.sports },
  { day: "23", month: "OCT", title: "School Trip · KG – Grade 7", time: "Learning beyond class", tag: "Explore" },
  { day: "04", month: "NOV", title: "Science & Discovery Fair", time: "Curiosity in action", tag: "Create" }
];

export default function Events() {
  return <section className="section events-section" id="events"><div className="container">
    <div className="events-heading-row"><SectionHeading eyebrow="Make memories" title={<>A school day is never <em>just a school day.</em></>} text="Experiences that bring our community together and make learning memorable." /><a className="section-action" href={school}>School calendar <ArrowRight size={17} /></a></div>
    <div className="events-layout"><article className="event-feature"><div className="event-feature-image"><img src={events[0].src} alt={events[0].title} loading="lazy" /><span>{events[0].tag}</span></div><div className="event-feature-copy"><small>Featured event</small><h3>{events[0].title}</h3><p><CalendarDays size={15} /> {events[0].time}</p><a href={school}>Event details <ArrowRight size={16} /></a></div></article>
      <div className="event-list">{events.slice(1).map((event) => <article className="event-row" key={event.title}><span className="event-date"><strong>{event.day}</strong><small>{event.month}</small></span><div><small className="event-tag">{event.tag}</small><h3>{event.title}</h3><p><MapPin size={14} /> {event.time}</p></div><a href={school} aria-label={`Details for ${event.title}`}><ArrowRight size={18} /></a></article>)}<div className="event-note"><strong>Come curious. Leave inspired.</strong><p>Our calendar is full of opportunities to try, create, connect and grow.</p></div></div>
    </div>
  </div></section>;
}
