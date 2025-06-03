// import React from "react";
// import { BulkAccommodationSection } from "./BulkAccommodationSection/BulkAccommodationSection";
// import { CorporateInfoSection } from "./CorporateInfoSection/CorporateInfoSection";
// import { FeaturedPropertiesSection } from "./FeaturedPropertiesSection/FeaturePropertiesSection";
// // import { NavigationMenuSection } from "./NavigationMenuSection/NavigationMenuSection";
// import { PartnershipSection } from "./PartnershipSection";
// import { RentYourSpaceSection } from "./RentYorSpaceSection";
// import { SearchSection } from "./SearchSection/SearchSection";
// import { TestimonialsSection } from "./TestimonialsSection";
// import { VisitBeforeYouBookSection } from "./VisitBeforeYouBookSection";
// import { WhyChooseSection } from "./WhyChooseSection";

// export const Homepage = (): JSX.Element => {
//   return (
//     <div className="bg-white flex flex-col items-center w-full">
//       <div className="w-full max-w-[1440px] relative">
//         {/* <NavigationMenuSection /> */}

//         <div className="w-full relative">
//           <img
//             className="w-full h-[767px] object-cover"
//             alt="Background image"
//             src="https://c.animaapp.com/mb8dvo30LDNV4D/img/image.png"
//           />
//           <div className="absolute inset-0">
//             <RentYourSpaceSection />
//             <SearchSection />
//           </div>
//         </div>

//         <VisitBeforeYouBookSection />
//         <WhyChooseSection />
//         <FeaturedPropertiesSection />
//         <PartnershipSection />
//         <CorporateInfoSection />
//         <TestimonialsSection />
//         <BulkAccommodationSection />
//       </div>
//     </div>
//   );
// };





import React from "react";
import { BulkAccommodationSection } from "./BulkAccommodationSection/BulkAccommodationSection";
import { CorporateInfoSection } from "./CorporateInfoSection/CorporateInfoSection";
import { FeaturedPropertiesSection } from "./FeaturedPropertiesSection/FeaturePropertiesSection";
// import { NavigationMenuSection } from "./NavigationMenuSection/NavigationMenuSection";
import { PartnershipSection } from "./PartnershipSection";
import { RentYourSpaceSection } from "./RentYorSpaceSection";
import { SearchSection } from "./SearchSection/SearchSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { VisitBeforeYouBookSection } from "./VisitBeforeYouBookSection";
import { WhyChooseSection } from "./WhyChooseSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col w-full">
      {/* <NavigationMenuSection /> */}

      <div className="w-full relative">
        <img
          className="w-full h-[767px] object-cover"
          alt="Background image"
          src="https://c.animaapp.com/mb8dvo30LDNV4D/img/image.png"
        />
        <div className="absolute inset-0">
          <RentYourSpaceSection />
          <SearchSection />
        </div>
      </div>

      <VisitBeforeYouBookSection />
      <WhyChooseSection />
      <FeaturedPropertiesSection />
      <PartnershipSection />
      <CorporateInfoSection />
      <TestimonialsSection />
      <BulkAccommodationSection />
    </div>
  );
};

