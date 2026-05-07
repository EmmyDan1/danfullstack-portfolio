export default function ProjectTechStack({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tech.map((t) => (
        <span
          key={t}
          style={{
            fontSize: "9px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.8)",
            
            padding: "3px 8px",
            borderRadius: "3px",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}