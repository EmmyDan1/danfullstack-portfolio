"use client";

import { useState } from "react";

export default function ContactEmail() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("emmydan68@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-16">
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Email
      </p>
      <div className="flex items-center gap-4">
        <a
          href="mailto:emmydan68@gmail.com"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "var(--color-primary)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#f5c842")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-primary)")}
        >
          emmydan68@gmail.com
        </a>
        <button
          onClick={copyEmail}
          style={{
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: copied ? "#f5c842" : "rgba(255,255,255,0.2)",
            background: "none",
            border: "0.5px solid rgba(255,255,255,0.1)",
            padding: "4px 10px",
            borderRadius: "3px",
            cursor: "pointer",
            transition: "all 0.2s",
            fontFamily: "var(--font-inter)",
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
   </div>
  );
}