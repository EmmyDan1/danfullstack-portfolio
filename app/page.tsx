"use client";
import Beams from "@/components/HeroBackground";

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
        <section
          id="home"
          className="min-h-screen items-center flex md:pl-20 px-8"
        >
          {/* TWO COLUMN on desktop, stacked on mobile */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* LEFT — Name, Title, Email */}

            <div className="flex flex-col gap-6 md:ml-20 ">
              <div className="border border-white/50 w-[600px] max-w-full flex flex-col items-start p-2 md:-translate-y-30 md:pr-20">
                <h1
                  style={{
                    fontFamily: "var(--font-smooch)",
                    fontSize: "clamp(4rem, 10vw, 9rem)",
                    fontWeight: "100",
                    letterSpacing: "-0.02em",
                    color: "var(--color-secondary)",
                    lineHeight: 0.8,
                  }}
                  className="tracking-wide "
                >
                  Daniel <br />
                  Emmanuel
                </h1>

                <p
                  style={{
                    fontSize: "14px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.9)",
                    textTransform: "uppercase",
                  }}
                >
                  Full Stack Developer
                </p>
              </div>

              <a
                href="mailto:emmydan68@gmail.com"
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                  color: "var(--color-primary)",
                  textDecoration: "none",

                  fontWeight: 300,
                }}
              >
                For business inquiries, email me at <br />
                emmydan68@gmail.com
              </a>
            </div>

            {/* RIGHT — About Me */}
            <div className="flex flex-col gap-4 md:w-[500px] max-w-full md:ml-20 md:mt-30">
              <div className="flex flex-col gap-2 mb-2">
                <h2
                  style={{
                    fontSize: "20px",
                   
                    color: "rgba(255,255,255,0.8)",
                    textTransform: "uppercase",
                  }}
                >
                  About Me
                </h2>
                <div
                  style={{
                    width: "100%",
                    height: "0.1px",
                    background: "rgba(255,255,255,0.8)",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                Fullstack developer building scalable web applications with
                modern frontend and efficient backend systems, focused on
                performance, clarity, and real-world usability.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                I like to fully understand how a product should work before I
                start building — creating solutions that are not just
                functional, but actually make sense for the people using them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
