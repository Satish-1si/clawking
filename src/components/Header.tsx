
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Play } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Games",
    href: "/services"
  }, {
    name: "Contact",
    href: "/contact"
  }];

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNavClick = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gray-50/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-200/60 transition-all duration-300">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img 
              src="/lovable-uploads/5eea2aa8-bf9f-416a-b841-d638dcaac9e7.png" 
              alt="LucraTech Solutions" 
              className="h-32 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                onClick={() => handleNavClick(item.href)}
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group ${
                  location.pathname === item.href ? "text-gray-900" : ""
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button asChild className="bg-orange-primary hover:bg-orange-hover text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link to="https://www.clawking.in/" target="_blank">
                <Play className="mr-2 h-4 w-4" />
                Play Claw King
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/60 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4 bg-gray-50/50 rounded-lg p-4 mt-4">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? "text-gray-900" : ""
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-orange-primary hover:bg-orange-hover text-white px-6 py-2 rounded-lg font-medium w-fit shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <Link to="https://www.clawking.in/" target="_blank" onClick={() => setIsMenuOpen(false)}>
                  <Play className="mr-2 h-4 w-4" />
                  Play Claw King
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
