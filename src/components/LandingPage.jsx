import Header from "./Header";
import NewFooter from "./newFooter";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <NewFooter/>
    </div>
  );
};

export default LandingPage;
