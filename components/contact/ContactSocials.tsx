const socials = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    description: "See my code",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    description: "Connect professionally",
  },
  {
    label: "X",
    href: "https://x.com/your-username",
    description: "Follow my thoughts",
  },
];

export default function ContactSocials() {
  return (
    <div className="mb-16">
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Elsewhere
      </p>
      <div className="flex flex-col gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                className="group-hover:text-yellow-300"
              >
                {s.label}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 300,
                }}
              >
                {s.description}
              </span>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-yellow-300"
              style={{ transition: "stroke 0.2s" }}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
