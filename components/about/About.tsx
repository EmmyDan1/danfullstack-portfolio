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
    <main style={{ fontFamily: "var(--font-inter)" }} className="relative min-h-screen w-full md:pl-20">
      <AboutHero />
      <Divider />
      <AboutBio />
      <AboutStats />
      <Divider />
      <AboutSkills />
      <Divider />
      <AboutApproach />
    </main>
  );
}