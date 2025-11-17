import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const productShowcase = [
  {
    title: "Robotics & Automation",
    subtitle: "Precision welding and handling systems",
    description:
      "Robot Welding Daihen, Panasonic welding lines, and integrated automation that elevates assembly and inspection throughput.",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Machining & Forming",
    subtitle: "Cutting, bending, and custom fixtures",
    description:
      "Brother machining centers, Bending Comco, Press Machine upgrades, and tailored fixtures for mass production precision.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial Utilities",
    subtitle: "Supporting facility performance",
    description:
      "Chiller units, conveyor-production lines, washing machines, and numbering machines to keep facilities running smoothly.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Motor & Drive Systems",
    subtitle: "Powertrain and motion control",
    description:
      "Production motors, Mitsubishi drives, and servo upgrades engineered for consistent, high-torque manufacturing environments.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Thermal & Welding Equipment",
    subtitle: "Heat treatment and joining",
    description:
      "TIG welding machines, seam welding (NASTOA), and industrial furnaces tailored for demanding fabrication workflows.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lifecycle Services",
    subtitle: "Preventive, repair, and overhaul",
    description:
      "Full service programs covering inspection, overhaul, improvement, and rapid-response support for critical assets.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

const Product = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Product"
        subtitle="Showcase"
        rightContent={
          <div className="text-premium-white/80 space-y-4 text-sm md:text-base">
            <p>
              Discover curated solutions ranging from robotics, machining, and utilities to lifecycle services. Each product
              is backed by technical consultation and maintenance programs.
            </p>
            <p>
              Choose the category that fits your manufacturing roadmap and let our specialists tailor the implementation for
              your facility.
            </p>
          </div>
        }
      />

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Product <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Six portrait cards that are ready to showcase images, sub titles, and core descriptions for every offering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productShowcase.map((product, index) => (
              <Card
                key={index}
                className="group shadow-industrial border border-border/60 hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <CardHeader>
                  <p className="text-sm uppercase tracking-wide text-primary/80">{product.subtitle}</p>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Product;

