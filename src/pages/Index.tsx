import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialSection from "@/components/DifferentialSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import MobilitySection from "@/components/MobilitySection";
import IntegrationSection from "@/components/IntegrationSection";
import TechnologySection from "@/components/TechnologySection";
import AuthoritySection from "@/components/AuthoritySection";
import ClosingSection from "@/components/ClosingSection";
import InstagramSection from "@/components/InstagramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/ui/Preloader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-page-fade">
      <Preloader />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AuthoritySection />
      <DifferentialSection />
      <ApplicationsSection />
      <MobilitySection />
      <IntegrationSection />
      <TechnologySection />
      <ClosingSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
