import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { CorporateSection } from "./sections/CorporateSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ListingsSection } from "./sections/ListingsSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { PartnershipsSection } from "./sections/PartnershipsSection/PartnershipsSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full max-w-[1440px] relative">
        {/* Navigation at the top */}
        <NavigationSection />

        {/* Listings section */}
        <ListingsSection />

        {/* Main content sections */}
        <CorporateSection />
        <PartnershipsSection />
        <FeaturesSection />
        <HeroSection />
        <TestimonialsSection />
        <ServicesSection />

        {/* Dropdown icon */}
        <div className="absolute top-[30px] right-0 left-0 flex justify-center">
          <ChevronDownIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
