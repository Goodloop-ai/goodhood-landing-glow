
import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarIndex: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, avatarIndex }) => {
  return (
    <div className="testimonial-card">
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3`}>
          <span className="text-amber-500 font-bold">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "As a working parent of three kids, I'm constantly juggling multiple apps and services. Goodloop would simplify my life by letting me book rides and childcare all in one place with people I actually trust.",
      name: "Sarah Johnson",
      role: "Parent of three",
      avatarIndex: 1,
    },
    {
      quote: "I'm looking for a way to earn extra income while caring for my own children. Goodloop would let me offer carpooling and childcare to my neighbors on my own schedule, and help me build wonderful connections in my community.",
      name: "Michael Chen",
      role: "Stay-at-home parent",
      avatarIndex: 2,
    },
    {
      quote: "Finding reliable transportation for my mother who doesn't speak English is always challenging. I can't wait to connect with bilingual neighbors through Goodloop who can help her get to appointments and social activities.",
      name: "Priya Patel",
      role: "Family caregiver",
      avatarIndex: 3,
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-600 font-medium mb-4">
            Community stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to solve real challenges for families</h2>
          <p className="text-gray-600">
            Hear from people excited to build stronger communities with Goodloop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarIndex={testimonial.avatarIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
