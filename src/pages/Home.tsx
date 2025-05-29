import React from "react";
import { BulkAccommodationSection } from "../screens/HomePage/sections/BulkAccommodationSection/BulkAccommodationSection";
import { CorporateInfoSection } from "../screens/HomePage/sections/CorporateInfoSection/CorporateInfoSection";
import { FeaturedPropertiesSection } from "../screens/HomePage/sections/FeaturedPropertiesSection/FeaturePropertiesSection";
import { PartnershipSection } from "../screens/HomePage/sections/PartnershipSection";
import { RentYourSpaceSection } from "../screens/HomePage/sections/RentYorSpaceSection";
import { SearchSection } from "../screens/HomePage/sections/SearchSection";
import { TestimonialsSection } from "../screens/HomePage/sections/TestimonialsSection";
import { VisitBeforeYouBookSection } from "../screens/HomePage/sections/VisitBeforeYouBookSection";
import { WhyChooseSection } from "../screens/HomePage/sections/WhyChooseSection";

export const Homepage = (): JSX.Element => {
    return (
        // <div className="bg-white flex flex-col items-center w-full">
        //     <div className="w-full max-w-[1440px] relative">
        //         <div className="w-full relative h-[500px] md:h-[600px] lg:h-[767px]">
        //             <img
        //                 src="https://c.animaapp.com/mb8dvo30LDNV4D/img/image.png"
        //                 alt="Background"
        //                 className="absolute inset-0 w-full h-full object-cover rounded-lg"
        //             />
        //             <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24">
        //                 <RentYourSpaceSection />
        //             </div>
        //         </div>
        //         <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-[-40px] z-10 relative">
        //             <SearchSection />
        //         </div>
        //         <VisitBeforeYouBookSection />
        //         <WhyChooseSection />
        //         <FeaturedPropertiesSection />
        //         <PartnershipSection />
        //         <CorporateInfoSection />
        //          <TestimonialsSection />

        //         {/* 




        //         <BulkAccommodationSection /> */}
        //     </div>
        // </div>





        //     <div className="bg-white flex flex-col w-full">
        //   {/* <NavigationMenuSection /> */}

        //   <div className="w-full relative">
        //     <img
        //       className="w-full h-[767px] object-cover"
        //       alt="Background image"
        //       src="https://c.animaapp.com/mb8dvo30LDNV4D/img/image.png"
        //     />
        //     <div className="absolute inset-0">
        //       <RentYourSpaceSection />
        //       <SearchSection />
        //     </div>
        //   </div>

        //   <VisitBeforeYouBookSection />
        //   <WhyChooseSection />
        //   <FeaturedPropertiesSection />
        //   <PartnershipSection />
        //   <CorporateInfoSection />
        //   <TestimonialsSection />
        //   <BulkAccommodationSection />
        // </div>


        <>
            <div className="w-full relative">
                <img
                    className="w-full h-[767px] object-cover"
                    alt="Background image"
                    src="https://c.animaapp.com/mb8dvo30LDNV4D/img/image.png"
                />

                {/* Absolute content over image */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="mt-10 lg:mt-20">
                        <RentYourSpaceSection />
                    </div>

                    <div className="flex justify-center -mb-12">
                        <div className="w-[80%]">
                            <SearchSection />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">


                <VisitBeforeYouBookSection />
                <WhyChooseSection />
                <FeaturedPropertiesSection />
                <PartnershipSection />
                <CorporateInfoSection />
                <TestimonialsSection />
            </div>
        </>

    );
};
