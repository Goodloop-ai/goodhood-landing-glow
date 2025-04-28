
import React from "react";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="step-card">
      <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-goodhood-blue flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Create your trusted network",
      description: "Sign up and connect with verified neighbors, friends, and community members you already know and trust.",
    },
    {
      number: 2,
      title: "Book or offer services",
      description: "Easily request childcare, rides, elder support, or lessons—or offer your own services to earn points or income.",
    },
    {
      number: 3,
      title: "Build your community",
      description: "Strengthen local bonds through reliable care exchanges that benefit everyone in your network.",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-goodhood-blue-light">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm text-goodhood-blue font-medium mb-4">
            Simple to use
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Goodloop works</h2>
          <p className="text-gray-600">
            Join your community network and start exchanging care services in just three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
