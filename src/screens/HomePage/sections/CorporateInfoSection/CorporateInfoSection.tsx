// import { ArrowUpIcon } from "lucide-react";
// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";

// // Data for the cards to enable mapping
// const accommodationCards = [
//   {
//     title: "For interns",
//     description: "Comfortable, budget stays near offices.",
//     backgroundImage: "https://c.animaapp.com/mb8dvo30LDNV4D/img/1.png",
//   },
//   {
//     title: "For Employees",
//     description: "", // No description in the original code
//     backgroundImage: "https://c.animaapp.com/mb8dvo30LDNV4D/img/4.png",
//   },
//   {
//     title: "For Students",
//     description: "", // No description in the original code
//     backgroundImage: "https://c.animaapp.com/mb8dvo30LDNV4D/img/3.png",
//   },
// ];

// export const CorporateInfoSection = (): JSX.Element => {
//   return (
//     <section className="flex flex-col w-full items-start gap-[60px] py-[140px] px-20">
//       <header className="items-center justify-center relative self-stretch w-full flex flex-col gap-4">
//         <h2 className="relative self-stretch mt-[-1.00px] font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
//           Bulk Accommodation Solutions
//         </h2>

//         <p className="relative max-w-[782px] font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
//           Vizima offers bulk accommodation solutions for corporates and
//           universities—safe, affordable PGs for interns, employees, and students
//           with full amenities.
//         </p>
//       </header>

//       <div className="flex items-start gap-5 relative self-stretch w-full">
//         {accommodationCards.map((card, index) => (
//           <Card
//             key={index}
//             className="flex-1 rounded-[30px] overflow-hidden border-0 shadow-none"
//             style={{
//               background: `linear-gradient(270deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 100%), url(${card.backgroundImage}) 50% 50% / cover`,
//             }}
//           >
//             <CardContent className="flex flex-col items-start gap-4 px-10 py-8">
//               <h4 className="relative self-stretch mt-[-1.00px] font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-white text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
//                 {card.title}
//               </h4>

//               <div className="relative w-[60px] h-[60px] rounded-[100px] bg-white/10 flex items-center justify-center">
//                 <ArrowUpIcon className="w-[46px] h-[46px] text-white" />
//               </div>

//               {card.description && (
//                 <p className="relative self-stretch font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-white text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
//                   {card.description}
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };




import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRightIcon } from "lucide-react";

// Data with multiple images for sliding animation on 2nd card
const accommodationCards = [
  {
    title: "For interns",
    description: "Comfortable, budget stays near offices.",
    backgroundImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PavivQmo9PxbZV9_GHvqNt-XrqMWsTlCWg&s",

      "https://www.datocms-assets.com/23428/1703243151-stressed-worker-in-office.jpg?auto=compress",
      "https://img.freepik.com/premium-photo/female-office-worker-secretary-is-working-with-laptop-office-desk-portrait-sexy-office-worker_210435-11775.jpg",
    ],
  },
  {
    title: "For College",
    description: "Comfortable, budget stays near offices.",
    backgroundImages: [
      "https://img.freepik.com/premium-photo/female-office-worker-secretary-is-working-with-laptop-office-desk-portrait-sexy-office-worker_210435-11775.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PavivQmo9PxbZV9_GHvqNt-XrqMWsTlCWg&s",
      "https://www.datocms-assets.com/23428/1703243151-stressed-worker-in-office.jpg?auto=compress",

    ],
  },
  {
    title: "For Office",
    description: "Comfortable, budget stays near offices.",
    backgroundImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PavivQmo9PxbZV9_GHvqNt-XrqMWsTlCWg&s",
      "https://img.freepik.com/premium-photo/female-office-worker-secretary-is-working-with-laptop-office-desk-portrait-sexy-office-worker_210435-11775.jpg",

      "https://www.datocms-assets.com/23428/1703243151-stressed-worker-in-office.jpg?auto=compress",
    ],
  },
  // {
  //   title: "For Employees",
  //   description: "",
  //   backgroundImages: [
  //     "https://c.animaapp.com/mb8dvo30LDNV4D/img/4.png",
  //     "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL2stczMzLWljZS01OTMyMy1qb2IxMy1sLWpvYjE3NDZfMS5wbmc.png", // example 2nd image for sliding
  //     "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zNV9waG90b19vZl95b3VuZ193b21hbl9hbmRfdGFibGV0X2luX3RoZV9oYW5kX181NTU4YTJkYy1hODlhLTQwMWMtYThkOS05OTlkNDg1YTVhMzIucG5n.png",
  //   ],
  // },
  // {
  //   title: "For Students",
  //   description: "",
  //   backgroundImages: [
  //     "https://images.pexels.com/photos/5196821/pexels-photo-5196821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     "https://t3.ftcdn.net/jpg/03/58/93/04/360_F_358930412_rodvr4vvY4LG0bUG8MKC3wwCZhWGozcW.jpg", // example 2nd image for sliding
  //     "https://media.istockphoto.com/id/1434116614/photo/teamwork-diversity-and-sales-manager-planning-branding-ideas-with-a-creative-designer-on-a.jpg?s=612x612&w=0&k=20&c=0qDHz0EDKEgxqcRP7V-YWaGv9nrjKDXG5lz8svrlbcQ=",
  //   ],
  // },
];

export const CorporateInfoSection = (): JSX.Element => {
  // State to track current slide for cards with multiple images
  const [currentSlides, setCurrentSlides] = useState(
    accommodationCards.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides((prev) =>
        prev.map((slideIndex, i) => {
          const maxIndex = accommodationCards[i].backgroundImages.length - 1;
          return slideIndex === maxIndex ? 0 : slideIndex + 1;
        })
      );
    }, 4000); // slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col w-full items-center gap-16 py-16 px-4 sm:px-6 md:px-20">
      <header className="flex flex-col items-center max-w-3xl gap-4 text-center">
        <h2 className="font-desktop-h2 font-semibold text-text text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide">
          Bulk Accommodation Solutions
        </h2>

        <p className="max-w-xl font-desktop-subtitle text-text text-base sm:text-lg md:text-xl tracking-wide leading-relaxed">
          Vizima offers bulk accommodation solutions for corporates and
          universities—safe, affordable PGs for interns, employees, and students
          with full amenities.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row items-start gap-6 w-full max-w-7xl">
        {accommodationCards.map((card, index) => {
          const bgImage =
            card.backgroundImages.length > 1
              ? card.backgroundImages[currentSlides[index]]
              : card.backgroundImages[0];

          return (
            <Card
              key={index}
              className="flex-1 rounded-3xl overflow-hidden border-0 shadow-none min-h-[220px] sm:min-h-[400px]"
              style={{
                background: `linear-gradient(270deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 100%), url(${bgImage}) center center / cover no-repeat`,
                transition: "background-image 1s ease-in-out",
              }}
            >
              <CardContent className="flex flex-col items-start gap-4 px-6 py-8 sm:px-10 sm:py-12">
                <h4 className="font-desktop-h4 font-semibold text-white text-2xl sm:text-3xl tracking-wide leading-tight">
                  {card.title}
                </h4>

                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRightIcon className="w-10 h-10 text-white" />
                </div>

                {card.description && (
                  <p className="font-desktop-text-regular text-white text-base sm:text-lg tracking-wide leading-relaxed max-w-sm">
                    {card.description}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

