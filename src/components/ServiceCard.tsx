import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-glow-strong transition-all duration-500 hover:-translate-y-3 bg-card border-border/50 backdrop-blur-sm relative overflow-hidden shadow-industrial">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 shadow-lg group-hover:shadow-glow">
          <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-500 shadow-glow"></div>
    </Card>
  );
};

export default ServiceCard;
