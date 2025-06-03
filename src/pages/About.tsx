import { ChevronDownIcon } from "lucide-react";
import React from "react";

import { CorporateSection } from "@/screens/AboutUs/sections/CorporateSection/CorporateSection";
import { HeroSection } from "@/screens/AboutUs/sections/HeroSection";
import { ListingsSection } from "@/screens/AboutUs/sections/ListingSection/ListingSection";
import { PartnershipsSection } from "@/screens/AboutUs/sections/PartnerShipSection/PartnerShipSection";
import { TestimonialsSection } from "@/screens/AboutUs/sections/TestimonalSection/TestimonialSection";
import { FeaturesSection } from "@/screens/AboutUs/sections/FeatureSection/FeatureSection";


export const About = (): JSX.Element => {
    return (
        <div className="bg-white flex flex-col items-center w-full">
            <div className="w-full max-w-[1440px] relative">
                <ListingsSection />

                {/* Main content sections */}
                <CorporateSection />
                <PartnershipsSection />
                <FeaturesSection />
                <HeroSection />
                <TestimonialsSection />
                {/* <ServicesSection /> */}

                {/* Dropdown icon */}
                <div className="absolute top-[30px] right-0 left-0 flex justify-center">
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};


export default About
