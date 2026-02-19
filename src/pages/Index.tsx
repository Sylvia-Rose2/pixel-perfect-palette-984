import HeroSection from "@/components/HeroSection";
import GalleryPlaceholder from "@/components/GalleryPlaceholder";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <GalleryPlaceholder />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
