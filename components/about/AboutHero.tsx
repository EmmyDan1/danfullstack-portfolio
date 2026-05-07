"use client";

import BlurText from "./BlurText";

export default function AboutHero() {
  return (
    <section className="px-8 pt-20 pb-10">
      <p
        style={{
          fontSize: "15px",
          letterSpacing: "0.25em",
          color: "#f5c842",
          textTransform: "uppercase",
          marginBottom: "16px",
          fontWeight: 200,
        }}
      >
        About Me
      </p>

      <div
        style={{
          fontFamily: "var(--font-smooch)",
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          color: "var(--color-primary)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          fontWeight: 100,
        }}
      >
        <BlurText
          text="Daniel Emmanuel"
          delay={100}
          animateBy="words"
          direction="top"
          className="mb-2"
        />
      </div>
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.9)",
          textTransform: "uppercase",
          marginTop: "8px",
        }}
      >
        <BlurText
          text="Full Stack Developer"
          delay={300}
          animateBy="words"
          direction="top"
        />
      </div>
    </section>
  );
}
