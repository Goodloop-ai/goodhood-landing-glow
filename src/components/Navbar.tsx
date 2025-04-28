
import React from "react";
import { Button } from "@/components/ui/button";
import { Infinity } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-md bg-amber-400 flex items-center justify-center">
            <Infinity className="text-white" size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold text-sky-400">Goodloop</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-sky-400 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-sky-400 transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-sky-400 transition-colors">
            Community Stories
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button variant="default" size="sm" className="bg-sky-400 hover:bg-sky-500">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
