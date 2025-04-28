
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex rounded-full bg-goodhood-green-light px-3 py-1 text-sm text-goodhood-green-dark font-medium">
            Your community awaits
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Connect with your <span className="text-goodhood-green">neighborhood</span>
          </h1>
          <p className="text-lg text-gray-600 md:pr-10">
            Discover local events, share resources, and build relationships with people in your area. 
            Goodhood makes it easy to create a thriving community.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button className="bg-goodhood-green hover:bg-goodhood-green-dark text-white px-8 py-6">
              Join Goodhood
            </Button>
            <Button variant="outline" className="border-goodhood-green text-goodhood-green hover:bg-goodhood-green-light px-8 py-6">
              See how it works
            </Button>
          </div>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-6 h-6 rounded-full border-2 border-white bg-goodhood-green-light`}>
                    <span className="sr-only">User avatar</span>
                  </div>
                ))}
              </span>
              <span>Join 2,000+ neighbors already connected</span>
            </p>
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-goodhood-green-light rounded-full opacity-70 blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-goodhood-green/10">
            <div className="p-1 bg-gradient-to-r from-goodhood-green-light to-goodhood-blue-light">
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-goodhood-green-light flex items-center justify-center shrink-0">
                    <span className="text-goodhood-green text-2xl">🏡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Maple Street Cleanup</h3>
                    <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM • 12 neighbors going</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Join your neighbors for our monthly street cleanup! 
                  Bring gloves if you have them. Trash bags and refreshments provided.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Details
                  </Button>
                  <Button size="sm" className="bg-goodhood-green text-xs">
                    I'll be there!
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
