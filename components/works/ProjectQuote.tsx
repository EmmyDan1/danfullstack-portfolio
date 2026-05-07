export default function ProjectQuote({ quote }: { quote: string }) {
  return (
    <div className="hidden md:flex flex-col justify-between h-full gap-8">
      {/* Vertical line accent */}
      <div
        style={{
          width: "1px",
          height: "80px",
          background: "rgba(245,200,66,0.6)",
          marginLeft: "4px",
        }}
      />

      {/* Quote */}
      <p
        style={{
          fontSize: "13px",
          letterSpacing: "0.04em",
          color: "var(--color-primary)",
          fontStyle: "italic",
          lineHeight: 2,
          fontWeight: 300,
        }}
      >
        {quote}
      </p>

      {/* Bottom accent */}
      <div
        style={{
          width: "1px",
          height: "80px",
          background: "rgba(245,200,66,0.6)",
          marginLeft: "4px",
        }}
      />
    </div>
  );
}