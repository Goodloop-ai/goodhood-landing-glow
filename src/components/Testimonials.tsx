
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
      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#38BDF8"
            stroke="none"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
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
      quote: "As a working parent of three kids, I was constantly juggling multiple apps and services. Goodloop has simplified my life by letting me book rides and childcare all in one place with people I actually trust.",
      name: "Sarah Johnson",
      role: "Parent of three",
      avatarIndex: 1,
    },
    {
      quote: "I was looking for a way to earn extra income while caring for my own children. Goodloop lets me offer carpooling and childcare to my neighbors on my own schedule, and I've built wonderful connections in my community.",
      name: "Michael Chen",
      role: "Stay-at-home parent",
      avatarIndex: 2,
    },
    {
      quote: "Finding reliable transportation for my mother who doesn't speak English was always challenging. Now, I can connect with bilingual neighbors through Goodloop who help her get to appointments and social activities.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solving real challenges for families</h2>
          <p className="text-gray-600">
            Hear from people who are building stronger communities with Goodloop.
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
