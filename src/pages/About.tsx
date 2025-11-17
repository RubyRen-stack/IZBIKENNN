import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Wrench, Boxes, Repeat } from "lucide-react";

const About = () => {
  const technicalSpecialization = [
    "Production Machine Repair and Overhaul: Includes Repair and Overhaul Machine ex, Brother Machine, Machine Fanuc, Bending Machine, Robot Welding Daihen, Las Machine Panasonic, Bending Comco, Mitsubishi Motor, Production Motor, Washing Machine, Numbering Machine, Press Machine, Chiller, Conveyor-production, and other production machines.",
    "Installation and Spare Parts: Handles Industrial machinery and equipment installation, as well as the supply of Office and industrial machinery, spare parts and equipment.",
    "Metal Working Tools: Provides Industrial machinery and machine tools for metal working.",
  ];

  const generalTrading = [
    "Operational Supplies: Includes Office Supply and Consumable items.",
    "Safety and Spare Parts: Provides Safety Good and Spare Part Machine.",
  ];

  const serviceTypes = ["Preventive", "Repair", "Overhaul", "Improvement"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        subtitle="PT. IZBIKEN MATAHARI ABADI"
      />

      {/* Page Title */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Vision <span className="text-primary">& Mission</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Guiding principles that keep our team focused on excellence and client success.
            </p>
          </div>

          <div className="space-y-8">
            {/* Vision */}
            <Card className="relative overflow-hidden shadow-glow transition-all duration-500 group border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold">Improve And Optimize Engine Performance</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="relative overflow-hidden shadow-glow transition-all duration-500 group border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regular Check Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Repair Service for The Greatest Engine Performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Best Solution for Machine</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Comprehensive solutions that cover technical specialization, trading capabilities, and service methodologies.
            </p>
          </div>

          <div className="space-y-10">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-background border border-primary/30 shadow-glow">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(255,165,0,0.35),_transparent_60%)]" />
              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-glow-strong">
                    <Wrench className="w-14 h-14 text-white" />
                  </div>
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-primary text-sm font-semibold border border-primary/30">
                    Core Expertise
                  </span>
                  <h3 className="text-3xl font-bold text-primary leading-tight">Technical Specialization (Specialist)</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed text-left">
                    {technicalSpecialization.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-orange-400 to-yellow-300" />
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-premium hover:shadow-glow transition-all duration-300 border border-border/60">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Boxes className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">General Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    {generalTrading.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-premium hover:shadow-glow transition-all duration-300 border border-border/60">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Repeat className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Types of Service Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {serviceTypes.map((type) => (
                      <span
                        key={type}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description / Legal Information */}
      <section className="py-12 sm:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <p className="text-base sm:text-lg text-center mb-6 sm:mb-8 leading-relaxed">
                  Our company is engaged in giving engine services especially for manufacturing.
                  We are also distributor of maintenances, repair and operational supplies for every aspect of your business.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 border-b border-border pb-3">
                    <span className="font-semibold text-muted-foreground text-sm sm:text-base">NIB:</span>
                    <span className="font-mono text-xs sm:text-sm break-all sm:break-normal text-right sm:text-left">2107220067004</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 border-b border-border pb-3">
                    <span className="font-semibold text-muted-foreground text-sm sm:text-base">SK Kemenkumham:</span>
                    <span className="font-mono text-xs sm:text-sm break-all sm:break-normal text-right sm:text-left">AHU0048835.AH.01.01.2022</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                    <span className="font-semibold text-muted-foreground text-sm sm:text-base">NPWP:</span>
                    <span className="font-mono text-xs sm:text-sm break-all sm:break-normal text-right sm:text-left">60.366.744.5-408.000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
