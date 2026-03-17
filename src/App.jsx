import ButtonGradient from "./assets/svg/ButtonGradient";

// Sections
import NavbarSection from "./sections/navbar/navbarSection";
import HeroSection from "./sections/hero/heroSection";
import BenefitsSection from "./sections/benefits/benefitsSection";
import CollaborationSection from "./sections/collaboration/collaborationSection";
import ServicesSection from "./sections/services/servicesSection";
import PricingSection from "./sections/pricing/pricingSection";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavbarSection />
        <HeroSection />
        <BenefitsSection />
        <CollaborationSection />
        <ServicesSection />
        <PricingSection />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
