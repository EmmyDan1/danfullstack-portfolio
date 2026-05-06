import type{ Projects} from "@/components/works/data"
export default function ProjectCard({ project }: { project: Projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left */}
      <div className="flex flex-col">
        <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#f5c842", textTransform: "uppercase", marginBottom: "10px", fontWeight: 500 }}>
          {project.number} / {project.total}
        </p>
        <h3 style={{ fontFamily: "var(--font-smooch)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", letterSpacing: "0.05em", color: "var(--color-primary)", lineHeight: 1.05, marginBottom: "4px" }}>
          {project.name}
        </h3>
        <p style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>
          {project.type}
        </p>
        <p style={{ fontSize: "12px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", marginBottom: "20px", fontWeight: 300 }}>
          {project.desc}
        </p>

        {/* Image */}
        <div
          style={{ position: "relative", borderRadius: "10px", overflow: "hidden", aspectRatio: "16/10", background: "#141414", cursor: "pointer" }}
          onClick={() => window.open(project.demo, "_blank")}
onMouseEnter={e => {
  const btn = e.currentTarget.querySelector(".visit-btn") as HTMLElement
  if (btn) btn.style.opacity = "1"
}}
onMouseLeave={e => {
  const btn = e.currentTarget.querySelector(".visit-btn") as HTMLElement
  if (btn) btn.style.opacity = "0"
}}
        >
          {project.image ? (
            <img src={project.image} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #141414 0%, #1c1c1c 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "8px", width: "80%", height: "70%" }}>
                <div style={{ background: "rgba(245,200,66,0.1)", borderRadius: "4px" }} />
                <div style={{ background: "#222", borderRadius: "4px" }} />
                <div style={{ background: "#222", borderRadius: "4px" }} />
                <div style={{ background: "#222", borderRadius: "4px" }} />
              </div>
            </div>
          )}
          <div
            className="visit-btn"
            style={{ position: "absolute", bottom: "14px", right: "14px", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", border: "0.5px solid rgba(255,255,255,0.1)", padding: "3px 8px", borderRadius: "3px" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right - Quote */}
      <div className="hidden md:flex flex-col justify-end h-full pb-1">
        <p style={{ fontSize: "11px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.12)", fontStyle: "italic", lineHeight: 1.9 }}>
          {project.quote}
        </p>
      </div>
    </div>
  )
}