import SignupForm from './SignupForm';
import HeaderLogo from './components/Logo';
import conesSrc from "./assets/cones.png";
import familySrc from "./assets/family.png";
import shieldSrc from './assets/shield.png';
import rocketSrc from "./assets/rocketship.png";

import mockScreen from './assets/mockscreen.png';

const MockScreen = () => {
  return <div className='mockup'>
    <img src={mockScreen}/>
    <div className='mockbtn bg-sky-400'/>
  </div>
}

// Hero Section
const HeroSection = () => (
  <section className="hero">

    <div className="pill">Coming soon to iOS & Android</div>
    <h1>Find your network, thrive together</h1>

    <div className='bg-blur'/>

    <p>
      Work and family shouldn't be a tradeoff. 
      Goodloop helps you save time and stress less by connecting you with trusted friends and neighbors for carpools and logistic challenges.
    </p>
    <p>
      Join our waitlist to be the first to try our services.
    </p>
    <SignupForm />
    <MockScreen />
  </section>
);

type ServiceCardProps = {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
}

// Service Card
const ServiceCard = ({ emoji, title, subtitle, description }: ServiceCardProps) => {

  const [time, helpers] = subtitle.split(" | ");

  return (
    <div className='flex flex-col w-full max-w-sm bg-gradient-to-r from-yellow-100 to-sky-100 rounded-xl p-[2px]'>
    <div className='bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3'>
      <div className='service-card-header'>
        <div className="service-card-emoji bg-sky-100">{emoji}</div>
        <div className='service-card-header-content'>
          <div className='text-lg font-semibold text-gray-900'>{title}</div>
          <div className='text-sm text-gray-500'>{time}</div>
          <div className='text-sm text-gray-500'>{helpers}</div>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {
          description
        }
      </p>
    </div>
    
  </div>
  )
}

// Services Section
const ServicesSection = () => (
  <section className="services">
    <h2 className="text-5xl font-light text-gray-800">
      Carpools first, community forever.
    </h2>
    <div className="service-card-list">
      <ServiceCard
        emoji="🏫"
        title="School Carpool"
        subtitle="Today, 3:00 PM | 3 trusted neighbors available"
        description="Running late? Your circle has pickup covered."
      />
      <ServiceCard
        emoji="⚽️"
        title="Dancing Class Carpool"
        subtitle="Today, 5:00 PM | 3 trusted neighbors available"
        description="Practice made easy with trusted parents."
      />
      <ServiceCard
        emoji="🩰"
        title="Dance Class Carpool"
        subtitle="Tomorrow, 4:00 PM | 4 trusted neighbors available"
        description="Give rides when you can. Get help when you need."
      />
    </div>
  </section>
);

type Value = {
  text: string;
  src: string;
  alt: string;
}

const ValuesSection = () => {
  return <section className='values'>
    <h2 className='text-5xl'>Our values</h2>
    <ul className='flex flex-wrap'>
      {
        [
          {
            text: "We commit to the safety of families.",
            src: shieldSrc,
            alt: "shield"
          },
          {
            text: "We break down barriers to allow families to thrive.",
            src: conesSrc,
            alt: "traffic cones"
          },
          {
            text: "We treat our team and partners like family.",
            src: familySrc,
            alt: "family"
          },
          {
            text: "We are future-focused to cultivate community for generations to come.",
            src: rocketSrc,
            alt: "rocket"
          }
        ].map((value: Value) => <li key={value.text}>
          <div className="value-list-item-icon-container">
            <img className="value-list-item-icon" src={value.src} alt={value.alt} />
          </div>
          {value.text}
        </li>)
      }
    </ul>
  </section>
}

const QuotesSection = () => {
  return <section className='quotes-section'>
    <div className="quotes-container">
      <i className="quote-1">"My meeting is running late, but I need to pickup my kid.”</i>
      <i className="quote-2">"I want to help other parents, but I need a simple way to connect."</i>
      <i className="quote-3">"Driving in five directions at once isn't sustainable. There must a better way."</i>
    </div>
    <h2 className="text-5xl font-light text-gray-800 pb-3">Sound familiar?</h2>
    <p>
      Work-life balance is hard. <br/> Parents need trusted backup when plans shift.<br/>
      Goodloop is building a modern solution for families who want to grow their networks of support.
    </p>
  </section>
}

const SignupFormSection = () => {
  return (
    <section className='sign-up-section'>
      <div className='flex flex-col gap-6 mb-7'>
        <h2 className="text-5xl font-light text-gray-800">
          Join the waitlist
        </h2>
        <p>
          It is our mission to support families and build community. <br/>
          Joining the waitlist grants you first opportunity for optimizing your schedules to balance worklife and family care.
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
        <ValuesSection />
        <QuotesSection />
        <SignupFormSection />
      </div>
      <footer>
        <span>© 2025 Goodloop. All rights reserved.</span>
        <span>Building hyperlocal services and empowering families.</span>
      </footer>
    </div>
  );
}