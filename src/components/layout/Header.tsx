import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/dishpet_assets/cropped-DISPET-LOGO-FINAl-2.webp" 
            alt="Dišpet Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/naslovnica" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            🏠 Naslovnica
          </Link>
          <Link 
            to="/blog" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            📝 Blog
          </Link>
          <Link 
            to="/kontakt" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            ✉️ Kontakt
          </Link>
        </nav>

        <Button 
          variant="default" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6"
        >
          Prijavi se
        </Button>
      </div>
    </header>
  );
};

export default Header;