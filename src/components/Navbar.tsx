
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-lg bg-goodhood-green flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold">Goodloop</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-goodhood-green transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-goodhood-green transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-goodhood-green transition-colors">
            Community Stories
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button variant="default" size="sm" className="bg-goodhood-green hover:bg-goodhood-green-dark">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
