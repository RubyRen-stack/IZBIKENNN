const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-premium-black/20 relative">
      {/* Thin black line above */}
      <div className="absolute top-0 left-0 w-full h-px bg-premium-black/30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-sm font-semibold text-premium-black tracking-wide">
          © 2025 PT. Izbiken Matahari Abadi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
