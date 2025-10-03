import GoodLoopLogo from './assets/goodloop_logo.svg';
import SignupForm from './SignupForm';

// Logo
const HeaderLogo = () => (
  <>
    <div className="w-24 h-24 mb-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl shadow-[0px_9.600000381469727px_14.40000057220459px_-9.600000381469727px_rgba(253,230,138,1.00)] shadow-[0px_24px_36px_-7.200000286102295px_rgba(253,230,138,1.00)] inline-flex justify-center items-center overflow-hidden">
      <div className="w-14 h-14 relative">
        <img className="w-100 absolute" src={GoodLoopLogo} alt="GoodLoop logo" />
      </div>
    </div>
    <h2 className='logo-text'>Goodloop</h2>
  </>
);

// Hero Section
const HeroSection = () => (
  <section className="hero">

    <div className="pill">Coming soon to iOS & Android</div>
    <h1>Your trusted caregiving network</h1>

    <div className='bg-blur'/>

    <p>
      Connect with verified neighbors for childcare, carpooling, and more. 
      All in one seamless, community-first platform.
    </p>
    <p>
      Be the first to try our services by joining our waitlist.
    </p>
    <SignupForm />

  {
    // TODO: add screenshot of mockup
  }
    <div className='mockup'>
      mocked UX design display
    </div>
    
  </section>
);

type ServiceCardProps = {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
}

// Service Card
const ServiceCard = ({ emoji, title, subtitle, description }: ServiceCardProps) => (
  <div className="flex w-full max-w-sm bg-gradient-to-r from-yellow-100 to-sky-100 rounded-xl p-[1px]">
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-sky-100 rounded-lg flex items-center justify-center text-2xl">
          {emoji}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

// Services Section
const ServicesSection = () => (
  <section className="services">
    <h2 className="text-5xl font-light text-gray-800">
      Carpooling and family care made easier.
    </h2>
    <p>
      Share carpooling responsibilities to make time for a better future
    </p>

    <div className="flex gap-8 justify-center">
      <ServiceCard
        emoji="🏫"
        title="School Run Carpool"
        subtitle="Today, 3:00 PM • 3 trusted neighbors available"
        description="Late for a meeting? Connect with verified neighbors who are already heading that way!"
      />
      <ServiceCard
        emoji="🩰"
        title="Dancing Class Carpool"
        subtitle="This evening • 5 trusted neighbors available"
        description="Need flexibility with your daughter's dance schedule? Your trusted network makes it simple. Give rides when you can, receive help when you need it."
      />
      <ServiceCard
        emoji="⚽️"
        title="Soccer Practice Carpool"
        subtitle="Today, 5:00 PM • 2 trusted neighbors available"
        description="Juggling work and practice? Trusted friends nearby are ready to support."
      />
    </div>
  </section>
);

// Testimonials Section
// const TestimonialsSection = () => (
//   <section className="py-16 flex flex-col items-center gap-12">
//     <div className="max-w-2xl text-center flex flex-col gap-4">
//       <span className="px-6 py-2 bg-gray-100/30 rounded-full border border-gray-200 text-xs shadow-sm">
//         Testimonials
//       </span>
//       <h2 className="text-5xl font-light">
//         “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
//       </h2>
//     </div>
//   </section>
// );

const SignupFormSection = () => {
  return (
    <section className='sign-up-section'>
      <div className='flex flex-col gap-6 mb-7'>
        <h2 className="text-5xl font-light text-gray-800">
          Join the waitlist
        </h2>
        <p>
          It is our mission to support families and build community. <br/>
          Joining the waitlist grants you first opportunity for optimizing your schedules for balancing worklife and family care.
        </p>
      </div>
      
      <SignupForm />
    </section>
  )
}

// Landing Page
export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <div className="pt-20 flex flex-col items-center">
        <HeaderLogo />
        <HeroSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <SignupFormSection />
      </div>
      <footer>
        <span>© 2025 Goodloop. All rights reserved.</span>
        <span>Building hyperlocal services and empowering families.</span>
      </footer>
    </div>
  );
}