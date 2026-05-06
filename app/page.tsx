import Beams from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", overflowY: "auto" }}>
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <section style={{ height: "100vh" }}>
          <div className="">
            <div className="border border-white w-[300px] h-[300px] flex flex-col  items-center ml-12 mt-24">
              <h1
                style={{
                  fontFamily: "var(--font-smooch)",
                  fontSize: "clamp(5rem, 12vw, 8rem)",
                  fontWeight: "100",
                  letterSpacing: "-0.02em",
                  color: "var(--color-secondary)",
                  lineHeight: 1,
                }}
              >
                Daniel <br />
                Emmanuel
              </h1>

              <p
                className="mt-4 text-lg"
                style={{ color: "var(--color-secondary)" }}
              >
                Full Stack Developer
              </p>
            </div>
            <p
              style={{ color: "var(--color-secondary)" }}
              className="ml-12 pt-24 text-lg"
            >
              {" "}
              For business inquiries, please contact me at emmydan68@gmail.com
            </p>
            <div>
              <div className="ml-12 pt-24">
                <h2
                  style={{ color: "var(--color-secondary)" }}
                  className="text-sm tracking-widest mb-3"
                >
                  ABOUT ME
                </h2>
                <div
                  style={{ backgroundColor: "var(--color-secondary)" }}
                  className="w-5/6 h-px"
                />
              </div>
              <p
                style={{ color: "var(--color-secondary)" }}
                className="ml-12 pt-10"
              >
                Fullstack developer building scalable web applications with
                modern frontend and efficient backend systems, focused on
                performance, clarity, and real-world usability.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
