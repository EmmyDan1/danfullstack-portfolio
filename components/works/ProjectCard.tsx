import type { Projects } from "@/components/works/data";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectTechStack from "./ProjectTechStack";
import ProjectQuote from "./ProjectQuote";

export default function ProjectCard({ project }: { project: Projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start">

      {/* LEFT COL — Info + Image + Tech */}
      <div className="flex flex-col gap-5">
        <ProjectInfo project={project} />
        <ProjectImage project={project} />
        <ProjectTechStack tech={project.tech} />
      </div>

      {/* CENTER — Vertical quote divider, desktop only */}
      <ProjectQuote quote={project.quote} />

      {/* RIGHT COL — Empty on mobile, additional context on desktop */}
      <div className="hidden md:flex flex-col justify-center gap-6 pt-8">
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            width: "100%",
          }}
        />
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Stack
        </p>
        <div className="flex flex-col gap-3">
          {project.tech.map((t) => (
            <p
              key={t}
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 300,
              }}
            >
              {t}
            </p>
          ))}
        </div>
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            width: "100%",
            marginTop: "8px",
          }}
        />
      </div>

    </div>
  );
}