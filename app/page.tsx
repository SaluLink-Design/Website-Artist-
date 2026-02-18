import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import ServicesSection from "@/components/ServicesSection";
import WhyBrandsSection from "@/components/WhyBrandsSection";
import ArtistRoster from "@/components/ArtistRoster";
import MediaHighlights from "@/components/MediaHighlights";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <ArtistRoster />
      <MediaHighlights />
      <ServicesSection />
      <WhyBrandsSection />
      <BrandPartnersSection />
      <ApproachSection />
      <CTASection />
    </>
  );
}
