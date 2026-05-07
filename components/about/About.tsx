import AboutHero from "./AboutHero";
import AboutBio from "./AboutBio";
import AboutStats from "./AboutStats";
import AboutSkills from "./AboutSkills";
import AboutApproach from "./AboutApproach";

const Divider = () => (
  <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 32px" }} />
);

export default function About() {
  return (
    <main
      style={{ fontFamily: "var(--font-inter)" }}
      className="relative min-h-screen w-full md:pl-24"
    >
      {/* MOBILE — stacked, DESKTOP — two column */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 md:min-h-screen">

        {/* LEFT COL */}
        <div className="flex flex-col border-r border-white/5">
          <AboutHero />
          <Divider />
          <AboutBio />
          <Divider />
          <AboutStats />
        </div>

        {/* RIGHT COL */}
        <div className="flex flex-col">
          <AboutSkills />
          <Divider />
          <AboutApproach />
        </div>

      </div>
    </main>
  );
}