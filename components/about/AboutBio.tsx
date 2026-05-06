export default function AboutBio() {
  return (
    <section className="px-8 py-10 max-w-xl">
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.9,
          color: "rgba(255,255,255,0.45)",
          fontWeight: 300,
        }}
      >
        Im a full-stack developer building modern web applications and systems
        that solve real business problems. I focus on performance, clean design,
        and practical functionality — driven by turning ideas into scalable
        digital products.
      </p>
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.9,
          color: "rgba(255,255,255,0.3)",
          fontWeight: 300,
          marginTop: "16px",
        }}
      >
        I like to fully understand how a product should work before I start
        building. It helps me create solutions that are not just functional,
        but actually make sense for the people using them.
      </p>
    </section>
  );
}