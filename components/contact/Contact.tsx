import ContactHero from "./ContactHero";
import ContactEmail from "./ContactEmail";
import ContactSocials from "./ContactSocials";

const Divider = () => (
  <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
);

export default function Contact() {
  return (
    <main
      style={{ fontFamily: "var(--font-inter)" }}
      className="relative min-h-screen w-full md:pl-20 px-8 flex flex-col justify-center py-20"
    >
      <ContactHero />
      <Divider />
      <ContactEmail />
      <Divider />
      <ContactSocials />
      <Divider />
      <p
        style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.15)",
          textTransform: "uppercase",
        }}
      >
        Based in Nigeria &nbsp;·&nbsp; Open to Remote
      </p>
    </main>
  );
}