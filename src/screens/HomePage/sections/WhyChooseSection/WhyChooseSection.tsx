// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const WhyChooseSection = (): JSX.Element => {
//   // City data for mapping
//   const cities = [
//     {
//       name: "Delhi NCR",
//       image:
//         "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg",
//     },
//     {
//       name: "Mumbai",
//       image:
//         "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-trpi4zxpaqu.svg",
//     },
//     {
//       name: "Bangalore",
//       image:
//         "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash--7aftbn2jo4.svg",
//     },
//     {
//       name: "Pune",
//       image:
//         "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-u3gtiojlmpg.svg",
//     },
//     {
//       name: "Hyderabad",
//       image:
//         "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-19szvauj7ka.svg",
//     },
//   ];

//   return (
//     <section className="flex flex-col items-center gap-[60px] px-20 py-16 w-full">
//       <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
//         Choose Your City
//       </h2>

//       <div className="flex flex-wrap items-end justify-center gap-[75px] w-full">
//         {cities.map((city, index) => (
//           <div key={index} className="flex flex-col items-center gap-5">
//             <h3 className="font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] text-center tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
//               {city.name}
//             </h3>
//             <Card className="w-[196px] h-[196px] p-0 border-0 overflow-hidden">
//               <CardContent className="p-0 h-full">
//                 <div
//                   className="w-full h-full rounded-[30px] bg-cover bg-center"
//                   style={{ backgroundImage: `url(${city.image})` }}
//                 />
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <Button className="px-10 py-3 bg-green rounded-[40px] hover:bg-green/90">
//         <span className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-white text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
//           View All Cities
//         </span>
//       </Button>
//     </section>
//   );
// };



import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseSection = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const cities = [
    { name: "Delhi NCR", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg" },
    { name: "Mumbai", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-trpi4zxpaqu.svg" },
    { name: "Bangalore", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash--7aftbn2jo4.svg" },
    { name: "Pune", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-u3gtiojlmpg.svg" },
    { name: "Hyderabad", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-19szvauj7ka.svg" },
    { name: "Chennai", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg" },
    { name: "Kolkata", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg" },
    { name: "Ahmedabad", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg" },
    { name: "Jaipur", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg" },
    { name: "Indore", image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-kzogdvyb-hm.svg" },
  ];

  const citiesToShow = showAll ? cities : cities.slice(0, 5);

  return (
    <section className="flex flex-col items-center gap-16 px-5 sm:px-10 md:px-20 py-16 w-full max-w-[1280px] mx-auto">
      <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)] text-center">
        Choose Your City
      </h2>

      {/* Responsive city cards container with 5 cards per row on large screens */}
      <div
        id="city-list"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 w-full"
      >
        {citiesToShow.map((city, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4"
          >
            <h3 className="font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] text-center tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
              {city.name}
            </h3>
            <Card className="w-full h-[180px] sm:h-[196px] p-0 border-0 overflow-hidden rounded-[30px] w-[196px]">
              <CardContent className="p-0 h-full">
                <div
                  className="w-full h-full rounded-[30px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${city.image})` }}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Button
        onClick={() => setShowAll(!showAll)}
        className="px-8 py-3 bg-green rounded-[40px] hover:bg-green/90 transition-colors"
        aria-expanded={showAll}
        aria-controls="city-list"
      >
        <span className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-white text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
          {showAll ? "View Less" : "View All Cities"}
        </span>
      </Button>
    </section>
  );
};

