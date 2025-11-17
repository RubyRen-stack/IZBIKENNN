import { Card } from "@/components/ui/card";

interface GalleryCardProps {
  image: string;
  caption: string;
}

const GalleryCard = ({ image, caption }: GalleryCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer shadow-industrial hover:shadow-glow-strong transition-all duration-500 hover:-translate-y-2 border-border/30">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={caption}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
        
        {/* Orange accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 shadow-glow"></div>
        
        {/* Caption */}
        <div className="absolute inset-0 flex items-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="space-y-2">
            <div className="w-12 h-0.5 bg-primary shadow-glow"></div>
            <p className="text-premium-white text-xl font-semibold tracking-wide">{caption}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GalleryCard;
