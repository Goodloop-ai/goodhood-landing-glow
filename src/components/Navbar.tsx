
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Infinity, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav className="border-b border-gray-100 py-4 backdrop-blur-md bg-white/80 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-200">
            <Infinity className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent">
            Goodloop
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-sky-500 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-sky-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-sky-500 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-sky-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-sky-500 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-sky-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Community Stories
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:inline-flex hover:bg-sky-50 hover:text-sky-600 font-medium"
          >
            Log in
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white shadow-md shadow-sky-200/50 hover:shadow-lg hover:shadow-sky-300/50 transition-all"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 border-t z-40 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Community Stories
            </a>
            <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
              Log in
            </Button>
            <Button 
              variant="default" 
              className="justify-start bg-gradient-to-r from-sky-400 to-sky-500" 
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
