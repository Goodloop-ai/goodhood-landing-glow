
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
            fill="#5CBA99"
            stroke="none"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full bg-goodhood-green-light flex items-center justify-center mr-3`}>
          <span className="text-goodhood-green font-bold">
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
      quote: "Goodhood has transformed our street from just houses to a real community. I've made lifelong friends and we've started so many great initiatives together.",
      name: "Sarah Johnson",
      role: "Maple Street",
      avatarIndex: 1,
    },
    {
      quote: "As a new resident, Goodhood helped me connect with neighbors instantly. The local recommendations were incredible and made me feel at home.",
      name: "Michael Chen",
      role: "Oak Avenue",
      avatarIndex: 2,
    },
    {
      quote: "Our neighborhood watch program became so much more effective when we moved it to Goodhood. Communication is seamless and everyone feels safer.",
      name: "Priya Patel",
      role: "Willow Lane",
      avatarIndex: 3,
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex rounded-full bg-goodhood-green-light px-3 py-1 text-sm text-goodhood-green-dark font-medium mb-4">
            Success stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by neighbors everywhere</h2>
          <p className="text-gray-600">
            Hear from people who have transformed their neighborhoods with Goodhood.
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
