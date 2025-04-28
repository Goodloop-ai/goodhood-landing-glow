
import React from "react";
import { MapPin, Users, Shield, Calendar, Clock, Award } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, color }) => {
  return (
    <div className="feature-card">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: <MapPin className="text-sky-500" size={24} />,
      title: "Hyperlocal Network",
      description: "Connect with trusted neighbors and friends in your community for caregiving needs.",
      color: "bg-sky-100",
    },
    {
      icon: <Shield className="text-sky-500" size={24} />,
      title: "Enhanced Safety",
      description: "Multi-layer verification with background checks, ID verification, and AI fraud detection.",
      color: "bg-sky-100",
    },
    {
      icon: <Users className="text-amber-500" size={24} />,
      title: "Childcare & Ridesharing",
      description: "Find trusted babysitters and arrange carpools with verified neighbors.",
      color: "bg-amber-100",
    },
    {
      icon: <Calendar className="text-sky-500" size={24} />,
      title: "Elder Support",
      description: "Book rides, translation services, and companionship for seniors in your family.",
      color: "bg-sky-100",
    },
    {
      icon: <Clock className="text-amber-500" size={24} />,
      title: "Convenient Booking",
      description: "All-in-one platform for scheduling, communication, and payments.",
      color: "bg-amber-100",
    },
    {
      icon: <Award className="text-sky-500" size={24} />,
      title: "Point-Based Economy",
      description: "Earn and redeem Goodloop Points for services within your community.",
      color: "bg-sky-100",
    },
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-600 font-medium mb-4">
            Your complete caregiving solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All your family's care needs in one place</h2>
          <p className="text-gray-600">
            Goodloop provides all the tools you need to find reliable care while building a stronger community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
