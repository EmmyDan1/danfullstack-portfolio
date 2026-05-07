import ScrollVelocity from "./ScrollVelocity";

const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Animations", "Responsive Design"];
const backendSkills = ["Node.js", "API Design", "Auth Systems", "Supabase", "Firebase", "REST APIs"];
const toolSkills = ["Git & GitHub", "Vercel", "SaaS Dashboards", "Logistics Systems", "AI Integrations", "PostgreSQL"];

export default function AboutSkills() {
  return (
    <section className="py-10 w-[360px] mx-auto md:w-[500px] lg:w-[600px] md:mx-0">
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
          paddingLeft: "32px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Skill Set
      </p>

      <ScrollVelocity
        texts={frontendSkills}
        velocity={15}
        className="text-white/30 text-[20px] tracking-widest leading-none uppercase"
        numCopies={6}
        damping={50}
        stiffness={400}
      />
      <div style={{ marginTop: "12px" }}>
        <ScrollVelocity
          texts={backendSkills}
          velocity={-15}
          className="text-white/30 text-[20px] tracking-widest leading-none uppercase"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </div>
      <div style={{ marginTop: "12px" }}>
        <ScrollVelocity
          texts={toolSkills}
          velocity={15}
          className="text-white/30 text-[20px] tracking-widest leading-none uppercase"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </div>
    </section>
  );
}