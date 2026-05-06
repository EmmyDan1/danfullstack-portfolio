const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Industries Served" },
];

export default function AboutStats() {
  return (
    <section className="px-8 py-6 flex items-center gap-10 border-t border-b border-white/5">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p
            style={{
              fontFamily: "var(--font-smooch)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-primary)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            {stat.value}
          </p>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              marginTop: "4px",
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}