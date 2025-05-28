
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { VideoSection } from "../components/VideoSection";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <VideoSection />
      <Testimonials />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
