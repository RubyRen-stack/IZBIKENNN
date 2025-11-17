import { ReactNode, useState, useEffect } from "react";
import heroImage from "@/assets/hero-industrial.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  rightContent?: ReactNode;
}

const HeroSection = ({ title, subtitle, rightContent }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[750px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.8) contrast(1.2)",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black/60 via-premium-black/50 to-premium-black/70" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, black 100%)",
        }}
      />

      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, hsl(38 100% 50% / 0.4), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT SECTION */}
          <div className="animate-fade-up space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-primary leading-none tracking-tight text-glow">
                {title}
              </h1>

              <div className="h-1 w-24 md:w-32 mx-auto md:mx-0 bg-gradient-to-r from-primary to-transparent shadow-glow-strong" />
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl text-premium-white font-light tracking-[0.1em] md:tracking-[0.12em] leading-snug md:leading-relaxed opacity-95">
              {subtitle}
            </h2>

            <p className="text-base sm:text-lg text-premium-white/70 font-light tracking-wide max-w-xl mx-auto md:mx-0">
              Premium Engine Services & Manufacturing Excellence
            </p>
          </div>

          {/* RIGHT SIDE LOGO WITH GLOW */}
          <div className="relative flex items-center justify-center animate-fade-in">
            {/* Glow Ring */}
            <div
              className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-25 animate-glow"
              style={{
                background:
                  "radial-gradient(circle, hsl(38 100% 50% / 0.8), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Logo that follows mouse */}
            <img
              src="LOGO.png"
              alt="Izbiken Logo"
              className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(${mousePosition.x * 0.6}deg)`,
                transition: "transform 0.08s ease-out",
                filter:
                  "drop-shadow(0 0 25px rgba(255,165,0,0.9)) drop-shadow(0 0 55px rgba(255,165,0,0.7))",
              }}
            />

            {/* Outer subtle ring */}
            <div
              className="absolute rounded-full 
              w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] md:w-[420px] md:h-[420px] 
              border border-primary/20"
              style={{
                boxShadow: "0 0 20px rgba(255,165,0,0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
