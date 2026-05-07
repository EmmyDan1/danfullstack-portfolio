import type { Projects } from "@/components/works/data";

export default function ProjectInfo({ project }: { project: Projects }) {
  return (
    <div className="flex flex-col gap-1 md:w-[500px] md:max-w-full">
      <p
        style={{
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "#f5c842",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {project.number} / {project.total}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-smooch)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          letterSpacing: "0.05em",
          color: "var(--color-primary)",
          lineHeight: 1.05,
        }}
      >
        {project.name}
      </h3>
      <p
        style={{
          fontSize: "10px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--color-secondary)",
        }}
      >
        {project.type}
      </p>
      <p
        style={{
          fontSize: "12px",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.8)",
          fontWeight: 300,
          marginTop: "8px",
        }}
      >
        {project.desc}
      </p>
    </div>
  );
}