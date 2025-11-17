import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog } from "lucide-react";

interface ProductCardProps {
  title: string;
  image?: string;
  imageAlt?: string;
}

const ProductCard = ({ title, image, imageAlt }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-glow-strong transition-all duration-500 hover:-translate-y-3 shadow-industrial border-border/50 backdrop-blur-sm relative overflow-hidden">
      {/* Metallic panel effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Product Image */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        </div>
      )}
      
      <CardHeader className="relative z-10 pb-3">
        {!image && (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 shadow-lg group-hover:shadow-glow">
            <Cog className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
          </div>
        )}
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-snug">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-orange-400 rounded-full shadow-glow" />
      </CardContent>
      
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-0 w-1 bg-gradient-to-b from-primary to-orange-400 group-hover:h-full transition-all duration-500 shadow-glow"></div>
    </Card>
  );
};


export default ProductCard;

