import { ArrowUpRight } from "lucide-react";
import { photos, school } from "../data/siteContent";
import SectionHeading from "./SectionHeading";
import "./Gallery.styles.css";

const gallery = [
  { src: photos.kinder, label: "Little discoveries" }, { src: photos.primary, label: "Learning together" },
  { src: photos.team, label: "Our community" }, { src: photos.campus, label: "A place to belong" },
  { src: photos.sports, label: "Move and play" }, { src: photos.high, label: "Ideas in action" }
];

export default function Gallery() {
  return <section className="section gallery-section" id="gallery"><div className="container">
    <div className="gallery-heading-row"><SectionHeading eyebrow="A glimpse of school life" title={<>The moments that make <em>us, us.</em></>} text="A few glimpses of the learning, friendship and discovery that fill our days." /><a className="inline-link" href={school}>Explore our campus <ArrowUpRight size={17} /></a></div>
    <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.label}><img src={item.src} alt={item.label} loading="lazy" /><figcaption><span>{item.label}</span><ArrowUpRight size={16} /></figcaption></figure>)}</div>
  </div></section>;
}
