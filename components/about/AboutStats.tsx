const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Industries Served" },
];

export default function AboutStats() {
  return (
    <section className="px-8 py-8 grid grid-cols-3 gap-4 border-t border-b border-white/5">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-start">
          <p
            style={{
              fontFamily: "var(--font-smooch)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
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
              color: "rgba(255,255,255,0.6)",
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