import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "PT. Manufacturing Indonesia",
    location: "Jakarta, Indonesia",
    image: "/images/client1.jpg",
  },
  {
    name: "Global Industries Corp",
    location: "Singapore",
    image: "/images/client2.jpg",
  },
  {
    name: "Asia Pacific Motors",
    location: "Bangkok, Thailand",
    image: "/images/client3.jpg",
  },
  {
    name: "Premium Engineering Ltd",
    location: "Kuala Lumpur, Malaysia",
    image: "/images/client4.jpg",
  },
  {
    name: "Industrial Solutions Inc",
    location: "Manila, Philippines",
    image: "/images/client5.jpg",
  },
  {
    name: "Tech Machinery Group",
    location: "Ho Chi Minh, Vietnam",
    image: "/images/client6.jpg",
  },
  {
    name: "Advanced Manufacturing Co",
    location: "Surabaya, Indonesia",
    image: "/images/client7.jpg",
  },
];

const ClientsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % clients.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl shadow-industrial bg-gradient-to-b from-background via-background to-background/70 pt-8 pb-12 px-4">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {clients.map((client, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="shadow-industrial border border-primary/10 backdrop-blur relative overflow-hidden group">
                <CardContent className="flex items-center justify-center p-0">
                  {/* IMAGE 16:9 */}
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl relative">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CardContent>
              </Card>

              {/* NAME & LOCATION */}
              <div className="mt-6 text-center space-y-1">
                <h3 className="text-2xl font-bold text-premium-white">{client.name}</h3>
                <p className="text-muted-foreground text-lg">{client.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-premium-black border-primary/30 hover:bg-primary hover:text-background scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-9 h-9 text-premium-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-premium-black border-primary/30 hover:bg-primary hover:text-background scale-110"
        onClick={nextSlide}
      >
        <ChevronRight className="w-9 h-9 text-premium-white" />
      </Button>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {clients.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-primary w-12" : "bg-border w-2"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsSlider;