
import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, color }) => {
  return (
    <div className="feature-card">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: "🗓️",
      title: "Local Events",
      description: "Discover and create events happening right in your neighborhood.",
      color: "bg-goodhood-green-light",
    },
    {
      icon: "🤝",
      title: "Resource Sharing",
      description: "Borrow tools, share skills, and exchange resources with neighbors.",
      color: "bg-goodhood-blue-light",
    },
    {
      icon: "💬",
      title: "Community Forums",
      description: "Discuss local issues and connect with people who share your interests.",
      color: "bg-goodhood-orange-light",
    },
    {
      icon: "🔔",
      title: "Safety Alerts",
      description: "Stay informed about important safety updates in your area.",
      color: "bg-goodhood-blue-light",
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description: "Access your community from anywhere with our mobile app.",
      color: "bg-goodhood-orange-light",
    },
    {
      icon: "🏆",
      title: "Community Projects",
      description: "Collaborate on initiatives to improve your neighborhood.",
      color: "bg-goodhood-green-light",
    },
  ];

  return (
    <section id="features" className="section bg-goodhood-neutral-light">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex rounded-full bg-goodhood-green-light px-3 py-1 text-sm text-goodhood-green-dark font-medium mb-4">
            Everything you need
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building better communities together</h2>
          <p className="text-gray-600">
            Goodhood provides all the tools you need to create a vibrant, connected neighborhood.
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
