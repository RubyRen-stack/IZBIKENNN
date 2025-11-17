"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-premium-black sticky top-0 z-50 shadow-industrial backdrop-blur-sm bg-premium-black/95">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 text-premium-white hover:text-primary transition-colors group"
          >
            <img 
              src="LOGO.png"
              alt="Izbiken Logo" 
              className="h-12 w-auto max-h-16 transition-transform group-hover:scale-105 object-contain"
            />
            <span className="font-bold text-xl tracking-wide">IZBIKEN</span>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
            <NavLink 
              to="/" 
              end
              className="text-premium-white hover:text-primary transition-all duration-300 text-lg font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink 
              to="/about"
              className="text-premium-white hover:text-primary transition-all duration-300 text-lg font-medium relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink 
              to="/product"
              className="text-premium-white hover:text-primary transition-all duration-300 text-lg font-medium relative group"
            >
              Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <a 
              href="#contact"
              className="text-premium-white hover:text-primary transition-all duration-300 text-lg font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button 
            className="md:hidden text-premium-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <NavLink 
              to="/"
              className="text-premium-white text-lg hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink 
              to="/about"
              className="text-premium-white text-lg hover:text-primary"
              onClick={() => setOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink 
              to="/product"
              className="text-premium-white text-lg hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Product
            </NavLink>

            <a 
              href="#contact"
              className="text-premium-white text-lg hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
