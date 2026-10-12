import { BookOpen, GraduationCap, Heart, Sparkles } from "lucide-react";
import "./Stats.styles.css";

const stats = [
  { value: "Since 1995", label: "A legacy of learning", icon: BookOpen, tone: "peach" },
  { value: "Every learner", label: "Seen as an individual", icon: Heart, tone: "mint" },
  { value: "Whole-child", label: "Learning and well-being", icon: Sparkles, tone: "lilac" },
  { value: "Future-ready", label: "Skills for a changing world", icon: GraduationCap, tone: "butter" }
];

export default function Stats() {
  return <section className="stats" id="stats"><div className="container stats-grid">
    {stats.map(({ value, label, icon: Icon, tone }) => <div className="stat-item" key={value}><span className={`stat-icon ${tone}`}><Icon size={22} /></span><div><strong>{value}</strong><span>{label}</span></div></div>)}
  </div></section>;
}
