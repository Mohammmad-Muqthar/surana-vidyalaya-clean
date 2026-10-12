export default function SectionHeading({ eyebrow, title, text, light = false, className = "" }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""} ${className}`}>
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  );
}
