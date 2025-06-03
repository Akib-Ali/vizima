import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const VisitBeforeYouBookSection = (): JSX.Element => {
  const featureCards = [
    {
      id: 1,
      icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/eva-calendar-fill.svg",
      iconAlt: "Eva calendar fill",
      title: "Verified Listings",
      description: "Only approved and inspected PGs",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/mdi-sofa.svg",
      iconAlt: "Mdi sofa",
      title: "Includes Meals",
      description: "Breakfast, lunch, and dinner",
    },
    {
      id: 3,
      iconType: "group",
      iconSrc: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group.png",
      iconAlt: "Group",
      iconStyles: "w-[50px] h-10 top-2.5 left-[5px]",
      title: "High-speed Wi-Fi",
      description: "Best internet speeds suitable for working from home",
    },
    {
      id: 4,
      iconType: "group",
      iconSrc: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-1.png",
      iconAlt: "Group",
      iconStyles: "w-[54px] h-[60px] top-0 left-[3px]",
      title: "Safe Booking",
      description: "Fully online with secure payment",
    },
  ];

  return (
    // <section className="flex flex-col items-center gap-12 px-4 sm:px-8 md:px-16 lg:px-20 py-12 w-full max-w-[1200px] mx-auto">
    //   {/* Heading and Description */}
    //   <div className="max-w-[847px] flex flex-col gap-4 px-2 sm:px-0">
    //     <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)] sm:text-3xl md:text-4xl">
    //       Why Choose Vizima?
    //     </h2>

    //     <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)] text-sm sm:text-base md:text-lg">
    //       Vizima offers verified PGs with meals, Wi-Fi, secure booking, and
    //       roommate options—ensuring a safe, comfortable, and hassle-free stay.
    //     </p>
    //   </div>

    //   {/* Feature Cards Grid */}
    //   <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    //     {featureCards.map((card) => (
    //       <Card
    //         key={card.id}
    //         className="w-full sm:w-[48%] md:w-[45%] lg:w-[305px] h-[248px] bg-[#e2f1e8] rounded-[30px] border-none shadow-none"
    //       >
    //         <CardContent className="flex flex-col h-full items-start gap-4 px-6 sm:px-10 py-6 sm:py-8">
    //           {card.iconType === "group" ? (
    //             <div className="relative w-[60px] h-[60px]">
    //               <img
    //                 className={`absolute ${card.iconStyles}`}
    //                 alt={card.iconAlt}
    //                 src={card.iconSrc}
    //               />
    //             </div>
    //           ) : (
    //             <img
    //               className="w-[60px] h-[60px]"
    //               alt={card.iconAlt}
    //               src={card.icon}
    //             />
    //           )}

    //           <h4 className="self-stretch font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)] text-lg sm:text-xl">
    //             {card.title}
    //           </h4>

    //           <p className="self-stretch font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)] text-sm sm:text-base">
    //             {card.description}
    //           </p>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </div>
    // </section>

//     <section className="flex flex-col items-center gap-12 px-0 sm:px-8 md:px-16 lg:px-20 py-12 w-full max-w-[1200px] mx-auto">
//   <div className="max-w-[847px] flex flex-col gap-4 px-2 sm:px-0">
//     <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)] sm:text-3xl md:text-4xl">
//       Why Choose Vizima?
//     </h2>

//     <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)] text-sm sm:text-base md:text-lg">
//       Vizima offers verified PGs with meals, Wi-Fi, secure booking, and
//       roommate options—ensuring a safe, comfortable, and hassle-free stay.
//     </p>
//   </div>

//   {/* Use grid for cards */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//     {featureCards.map((card) => (
//       <Card
//         key={card.id}
//         className="bg-[#e2f1e8] rounded-[30px] border-none shadow-none"
//       >
//         <CardContent className="flex flex-col h-full items-start gap-4 px-6 sm:px-10 py-6 sm:py-8">
//           {card.iconType === "group" ? (
//             <div className="relative w-[60px] h-[60px]">
//               <img
//                 className={`absolute ${card.iconStyles}`}
//                 alt={card.iconAlt}
//                 src={card.iconSrc}
//               />
//             </div>
//           ) : (
//             <img
//               className="w-[60px] h-[60px]"
//               alt={card.iconAlt}
//               src={card.icon}
//             />
//           )}

//           <h4 className="self-stretch font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)] text-lg sm:text-xl">
//             {card.title}
//           </h4>

//           <p className="self-stretch font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)] text-sm sm:text-base">
//             {card.description}
//           </p>
//         </CardContent>
//       </Card>
//     ))}
//   </div>
// </section>


<section className="flex flex-col items-center gap-12 px-2 sm:px-4 md:px-6 lg:px-8 py-12 w-full max-w-full mx-auto">
  {/* Heading container ka max-width hata diya taaki full width le sake */}
  <div className="max-w-[847px] flex flex-col gap-4 px-2 sm:px-0">
    <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)] sm:text-3xl md:text-4xl">
      Why Choose Vizima?
    </h2>

    <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)] text-sm sm:text-base md:text-lg">
      Vizima offers verified PGs with meals, Wi-Fi, secure booking, and
      roommate options—ensuring a safe, comfortable, and hassle-free stay.
    </p>
  </div>

  {/* Cards grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[1200px] px-2 sm:px-0">
    {featureCards.map((card) => (
      <Card
        key={card.id}
        className="bg-[#e2f1e8] rounded-[30px] border-none shadow-none w-full" // w-full to fill grid column
      >
        <CardContent className="flex flex-col h-full items-start gap-4 px-6 sm:px-10 py-6 sm:py-8">
          {card.iconType === "group" ? (
            <div className="relative w-[60px] h-[60px]">
              <img
                className={`absolute ${card.iconStyles}`}
                alt={card.iconAlt}
                src={card.iconSrc}
              />
            </div>
          ) : (
            <img
              className="w-[60px] h-[60px]"
              alt={card.iconAlt}
              src={card.icon}
            />
          )}

          <h4 className="self-stretch font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)] text-lg sm:text-xl">
            {card.title}
          </h4>

          <p className="self-stretch font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)] text-sm sm:text-base">
            {card.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


  );
};

