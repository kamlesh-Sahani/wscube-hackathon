"use client";
import CallToActionSection from "@/components/CallToAction";
import FeaturesSection from "@/components/featureSection";
import HeroSection from "@/components/HeroSection";


export default function LandingPage() {
  return (
    <div className="pt-30">
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
    </div>
  );
}