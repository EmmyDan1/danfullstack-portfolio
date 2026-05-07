import ContactHero from "./ContactHero";
import ContactEmail from "./ContactEmail";
import ContactSocials from "./ContactSocials";

const Divider = () => (
  <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
);

export default function Contact() {
  return (
    <main
      style={{ fontFamily: "var(--font-inter)" }}
      className="relative min-h-screen w-full md:pl-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen">

        {/* LEFT COL — Hero statement */}
        <div
          className="flex flex-col justify-center px-8 py-20 border-r border-white/5"
        >
          <ContactHero />
        </div>

        {/* RIGHT COL — Email, Socials, Footer note */}
        <div className="flex flex-col justify-center px-8 py-20 gap-10">
          <ContactEmail />
          <Divider />
          <ContactSocials />
          <Divider />
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
            }}
          >
            Based in Nigeria &nbsp;·&nbsp; Open to Remote
          </p>
        </div>

      </div>
    </main>
  );
}