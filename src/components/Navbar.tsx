import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-lg font-bold text-purple-dark">
              VS
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="nav-link text-gray-700 hover:text-purple-dark"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link text-gray-700 hover:text-purple-dark"
            >
              About
            </a>
            <a
              href="#projects"
              className="nav-link text-gray-700 hover:text-purple-dark"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link text-gray-700 hover:text-purple-dark"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-purple-dark"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-purple-dark"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-gray-700 hover:text-purple-dark"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-purple-dark"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
