export default function ContactHero() {
  return (
    <div className="flex flex-col gap-6">
      <p
        style={{
          fontSize: "15px",
          letterSpacing: "0.25em",
          color: "#f5c842",
          textTransform: "uppercase",
          fontWeight: 200,
        }}
      >
        Contact
      </p>
      <h1
        style={{
          fontFamily: "var(--font-smooch)",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          color: "var(--color-primary)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          fontWeight: 100,
        }}
      >
        Lets Build
        <br />
        Something.
      </h1>
      <p
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.6)",
          fontWeight: 300,
          letterSpacing: "0.04em",
          lineHeight: 1.8,
          maxWidth: "360px",
        }}
      >
        Open to freelance projects, collaborations, and full-time remote roles.
      </p>

      {/* Decorative vertical line */}
      <div
        style={{
          width: "1px",
          height: "60px",
          background: "rgba(245,200,66,0.2)",
          marginTop: "16px",
        }}
      />
    </div>
  );
}