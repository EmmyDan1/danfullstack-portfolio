"use client";

import { useState, useEffect, useRef } from "react";
import projects from "./data";
import ProjectCard from "./ProjectCard";

export default function Works() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) =>
    setCurrent((index + projects.length) % projects.length);
  const project = projects[current];

  return (
    <section
      ref={ref}
      style={{
        fontFamily: "var(--font-inter)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(5px)",
        transition:
          "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)",
      }}
      className="relative w-full min-h-screen px-10 py-12 overflow-hidden"
      id="works"
    >
      {/* Header */}
      <div className="flex items-baseline gap-5 mb-10">
        <h2
          style={{
            fontFamily: "var(--font-smooch)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "0.08em",
            color: "var(--color-primary)",
            lineHeight: 1,
          }}
        >
          WORKS
        </h2>
        <div className="flex items-center gap-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--color-secondary)",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            view demo
          </a>
          <div
            style={{
              width: "1px",
              height: "10px",
              background: "rgba(255,255,255,0.12)",
            }}
          />
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--color-secondary)",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            github
          </a>
        </div>
      </div>

      {/* Card */}
      <ProjectCard project={project} />

      {/* Footer */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "36px" : "18px",
                height: "2px",
                background:
                  i === current ? "#f5c842" : "rgba(255,255,255,0.12)",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[-1, 1].map((dir, i) => (
            <button
              key={i}
              onClick={() => goTo(current + dir)}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "0.5px solid rgba(255,255,255,0.12)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.35)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f5c842";
                e.currentTarget.style.color = "#f5c842";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.35)";
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {dir === -1 ? (
                  <polyline points="15 18 9 12 15 6" />
                ) : (
                  <polyline points="9 18 15 12 9 6" />
                )}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
