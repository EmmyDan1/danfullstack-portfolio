const approaches = [
  {
    label: "Understand First",
    desc: "I study the product deeply before writing a single line.",
  },
  {
    label: "Build Clean",
    desc: "Performance and maintainability are non-negotiable.",
  },
  {
    label: "Communicate Well",
    desc: "I keep stakeholders informed and stay solution-focused.",
  },
];

export default function AboutApproach() {
  return (
    <section className="px-8 py-10">
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        Approach
      </p>
      <div className="flex flex-col gap-4">
        {approaches.map((item) => (
          <div
            key={item.label}
            style={{
              borderLeft: "1px solid rgba(245,200,66,0.3)",
              paddingLeft: "16px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--color-primary)",
                textTransform: "uppercase",
                marginBottom: "4px",
                fontWeight: 500,
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}