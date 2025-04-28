
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
      title: "Sign up and verify your address",
      description: "Create your account and verify your address to join your neighborhood's community.",
    },
    {
      number: 2,
      title: "Connect with neighbors",
      description: "Introduce yourself, join groups based on your interests, and meet people nearby.",
    },
    {
      number: 3,
      title: "Participate in your community",
      description: "Attend events, share resources, and collaborate on projects that matter to you.",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-goodhood-blue-light">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm text-goodhood-blue font-medium mb-4">
            Getting started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Goodhood works</h2>
          <p className="text-gray-600">
            Join your neighborhood in three simple steps and start building connections today.
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
