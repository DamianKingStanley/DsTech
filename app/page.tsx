import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CoreValues from "./components/CoreValues";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import JobProfile from "./components/JobProfile";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <CoreValues />
      <WhyChooseUs />
      <Testimonials />
      <JobProfile />
    </main>
  );
}
