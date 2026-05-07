"use client";

import Image from "next/image";
import type { Projects } from "@/components/works/data";

export default function ProjectImage({ project }: { project: Projects }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        aspectRatio: "16/10",
        cursor: "pointer",
        background: "#141414",
      }}
      onClick={() => window.open(project.demo, "_blank")}
      onMouseEnter={(e) => {
        const btn = e.currentTarget.querySelector(".visit-btn") as HTMLElement;
        if (btn) btn.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget.querySelector(".visit-btn") as HTMLElement;
        if (btn) btn.style.opacity = "0";
      }}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div
        className="visit-btn"
        style={{
          position: "absolute",
          bottom: "14px",
          right: "14px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.25)",
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 1,
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </div>
  );
}