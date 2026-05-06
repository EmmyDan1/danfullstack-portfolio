export default function ContactHero() {
  return (
    <div className="mb-16">
      <p
        style={{
          fontSize: "10px",
          letterSpacing: "0.25em",
          color: "#f5c842",
          textTransform: "uppercase",
          marginBottom: "20px",
          fontWeight: 500,
        }}
      >
        Contact
      </p>
      <h1
        style={{
          fontFamily: "var(--font-smooch)",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          color: "var(--color-primary)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          marginBottom: "16px",
        }}
      >
        Lets Build
        <br />
        Something.
      </h1>
      <p
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.35)",
          fontWeight: 300,
          letterSpacing: "0.04em",
        }}
      >
        Open to freelance projects, collaborations, and full-time remote roles.
      </p>
    </div>
  );
}