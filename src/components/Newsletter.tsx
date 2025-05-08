
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Thanks for your interest!",
      description: "You've been added to our waitlist. We'll notify you when Goodloop launches in your area.",
    });
    
    setEmail("");
  };

  return (
    <section id="waitlist" className="section bg-gradient-to-br from-sky-400 to-sky-500 relative overflow-hidden">
      {/* Abstract shapes for high-tech feel */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build the village your family needs?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join our waitlist to be notified when Goodloop launches in your area and be among the first to build your trusted network.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="default"
                className="bg-amber-400 hover:bg-amber-500 text-white font-medium shadow-lg shadow-amber-500/20"
              >
                Join Waitlist
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
