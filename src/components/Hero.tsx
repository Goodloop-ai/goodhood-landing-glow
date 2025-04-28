
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-600 font-medium">
            Restoring the village every family needs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Your trusted <span className="text-sky-400">caregiving</span> network
          </h1>
          <p className="text-lg text-gray-600 md:pr-10">
            Connect with verified neighbors for childcare, transportation, elder care, and more. 
            All in one seamless, community-first platform.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-6">
              Join Waitlist
            </Button>
            <Button variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-50 px-8 py-6">
              Learn More
            </Button>
          </div>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-6 h-6 rounded-full border-2 border-white bg-amber-100`}>
                    <span className="sr-only">User avatar</span>
                  </div>
                ))}
              </span>
              <span>Join 80% of surveyed parents who want a solution like Goodloop</span>
            </p>
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-100 rounded-full opacity-70 blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-100">
            <div className="p-1 bg-gradient-to-r from-amber-100 to-sky-100">
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                    <span className="text-sky-400 text-2xl">🚗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Soccer Practice Carpool</h3>
                    <p className="text-sm text-muted-foreground">Today, 4:00 PM • 3 trusted neighbors available</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Need a ride for your child to soccer practice? Connect with verified neighbors who are already heading that way!
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-sky-400 text-xs hover:bg-sky-500">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
