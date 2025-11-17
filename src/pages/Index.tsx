import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import GalleryCard from "@/components/GalleryCard";
import ClientsSlider from "@/components/ClientsSlider";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Wrench, Package, Factory, Cog } from "lucide-react";

const Index = () => {
  const specialists = [
    { 
      icon: Wrench, 
      title: "Machine Repair and Maintenance Services", 
      description: "Repair and Overhaul Machine ex, Brother Machine, Machine Fanuc, Bending Machine, Robot Welding Daihen, Las Machine Panasonic, Bending Comco, Mitsubishi Motor, Production Motor, Washing Machine, Numbering Machine, Press Machine, Chiller, Conveyor-production, and other production machine." 
    },
    { 
      icon: Package, 
      title: "Supply of Spare Parts and Equipment", 
      description: "Office and industrial machinery, spare parts and equipment." 
    },
    { 
      icon: Factory, 
      title: "Machinery and Equipment Installation", 
      description: "Industrial machinery and equipment installation." 
    },
    { 
      icon: Cog, 
      title: "Supply of Tools and Machinery", 
      description: "Industrial machinery and machine tools for metal working." 
    },
  ];

  const primarySpecialist = specialists[0];
  const otherSpecialists = specialists.slice(1);
  const PrimaryIcon = primarySpecialist?.icon;

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <HeroSection title="IZBIKEN" subtitle="MATAHARI ABADI" />

      {/* Specialist */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary">Specialist</span>
            </h2>
          </div>

          <div className="space-y-10">
            {primarySpecialist && (
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-background border border-primary/40 shadow-glow">
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(255,165,0,0.35),_transparent_60%)]" />
                <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="shrink-0">
                    <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-glow-strong">
                      {PrimaryIcon && <PrimaryIcon className="w-16 h-16 text-white" />}
                    </div>
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-primary text-sm font-semibold border border-primary/40">
                      Core Expertise
                    </span>
                    <h3 className="text-3xl font-bold text-primary leading-tight">{primarySpecialist.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {primarySpecialist.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-orange-400 to-yellow-300" />
              </Card>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherSpecialists.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Card key={i} className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/80 border border-border/40 backdrop-blur relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="p-6 relative z-10 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto md:mx-0 shadow-lg group-hover:shadow-glow">
                        <Icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-center md:text-left">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {s.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-500" />
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary">Gallery</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GalleryCard image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" caption="Modern Manufacturing Facility" />
            <GalleryCard image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800" caption="Precision Engine Work" />
            <GalleryCard image="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800" caption="Quality Inspection Process" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="text-primary">Clients</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <ClientsSlider />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
