// import { ApartmentListingsSection } from "@/screens/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";
// import ApartmentListingSection from "@/pageComponent/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";
// import ApartmentListingSection from "../pageComponent/ProductsPage/sections/ApartmentListingSection";
// import { MinusIcon, PlusIcon } from "lucide-react";
// import React from "react";
// import { ApartmentListingsSection } from "./sections/ApartmentListingsSection/ApartmentListingsSection";
// import { FAQSection } from "./sections/FAQSection";
// import { FiltersAndSortingSection } from "./sections/FiltersAndSortingSection";
// import { LocationMapSection } from "./sections/LocationMapSection";
// import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
// import { PageTitleSection } from "./sections/PageTitleSection/PageTitleSection";
// import { SearchBarSection } from "./sections/SearchBarSection/SearchBarSection";
// import { UserGroupSection } from "./sections/UserGroupSection/UserGroupSection";

// import { ApartmentListingsSection } from "@/screens/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";



// import { ApartmentListingsSection } from "@/pageComponent/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";

// import ApartmentListingsSection from "@/pageComponent/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";
// import ApartmentListingSection from "@/pageComponent/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";


// ApartmentListingSection
// import { WhyChooseSection } from "../screens/HomePage/sections/WhyChooseSection";


// import ApartmentListingSection from "../screens/ProductsPage/sections/ApartmentListingSection"

// ApartmentListingsSection


import ApartmentListingSection from "../screens/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";
import { FAQSection } from "../screens/ProductsPage/sections/FAQSections";
// import { FiltersAndSortingSection } from "../screens/ProductsPage/sections/FilterAndSortingSection";
import { LocationMapSection } from "../screens/ProductsPage/sections/LocationMapSection";
import { PageTitleSection } from "../screens/ProductsPage/sections/PageTitleSection/PageTitleSection";
import { SearchBarSection } from "../screens/ProductsPage/sections/SearchBarSetion/SearchBarSection";
import { UserGroupSection } from "../screens/ProductsPage/sections/UserGroupSection/UserGroupSection";

import FiltersAndSortingSection from "../screens/ProductsPage/sections/FilterAndSortingSection/FilterandSorting";



const ProductList = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Navigation Menu Section - Top 0%, Full Width */}
        {/* <NavigationMenuSection //> */}

        {/* Search Bar Section - Top 4%, Left 13%, Width 74% */}
        <div className="relative" style={{ marginTop: "1%" }}>
          <div className="mx-auto" style={{ width: "74%", marginLeft: "13%" }}>
            <SearchBarSection />
          </div>
          <img
            className="absolute w-6 h-6 top-[30px] right-[606px]"
            alt="Gridicons dropdown"
            src="https://c.animaapp.com/mbdfcvegHJjZtn/img/gridicons-dropdown.svg"
          />
        </div>

        {/* Filters and Sorting Section - Top 8%, Full Width */}
        <div style={{ marginTop: "2%" }}>
          <FiltersAndSortingSection />
        </div>

        {/* Main content area with listings and map - Top 13% */}
        <div
          className="flex flex-row"
          style={{ marginTop: "3%", paddingLeft: "6%", paddingRight: "6%" }}
        >
          {/* Apartment Listings Section - Left 6%, Width 53% */}
          <div style={{ width: "53%" }}>
            <ApartmentListingSection/>

          </div>

          {/* Location Map Section - Left 61%, Width 33% */}
          <div style={{ width: "33%", marginLeft: "8%" }} className="relative">
            <LocationMapSection />
            <div className="absolute top-5 right-5">
              <button className="justify-center p-2 rounded-[10px] inline-flex items-start bg-green">
                {/* <PlusIcon className="w-6 h-6 text-white" /> */}
              </button>
            </div>
            <div className="absolute top-[68px] right-5">
              <button className="justify-center p-2 rounded-[10px] inline-flex items-start bg-green">
                {/* <MinusIcon className="w-6 h-6 text-white" /> */}
              </button>
            </div>
          </div>
        </div>

        {/* Page Title Section - Top 55%, Left 6%, Width 89% */}
        <div style={{ marginTop: "6%", paddingLeft: "6%", paddingRight: "5%" }}>
          <PageTitleSection />
        </div>

        {/* FAQ Section - Top 67%, Left 6%, Width 89% */}
        <div style={{ marginTop: "5%", paddingLeft: "6%", paddingRight: "5%" }}>
          <h2 className="font-desktop-h3 font-[number:var(--desktop-h3-font-weight)] text-text text-[length:var(--desktop-h3-font-size)] tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] [font-style:var(--desktop-h3-font-style)]">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            <FAQSection />
          </div>
        </div>

        {/* User Group Section - Top 85%, Full Width */}
        {/* <div style={{ marginTop: "3%" }}>
          <UserGroupSection />
        </div> */}
      </div>
    </div>
  );
};

// import ApartmentListingSection from "../screens/ProductsPage/sections/ApartmentListingSection/ApartmentListingSection";

// const ProductList=()=>{

//     return(

//         <>
//         <h1>Product List</h1>
//         <ApartmentListingSection/>
//         </>
//     )
// }

export default ProductList