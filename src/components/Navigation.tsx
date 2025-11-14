import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/ecobreak-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImage} alt="EcoBreak Logo" className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110" />
            <span className="text-2xl md:text-3xl font-bold text-primary">EcoBreak</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  location.pathname === link.to ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="default" 
              className="rounded-full"
              onClick={() => window.open("https://loud-editor-20488240.figma.site", "_blank")}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border py-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-foreground hover:text-primary hover:bg-secondary/50 px-4 rounded-lg transition-all ${
                  location.pathname === link.to ? "text-primary bg-secondary/30" : ""
                }`}
              >
                {link.label}
            </Link>
            ))}
            <div className="px-4 pt-2">
              <Button 
                variant="default" 
                size="default" 
                className="w-full rounded-full"
                onClick={() => window.open("https://loud-editor-20488240.figma.site", "_blank")}
              >
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
