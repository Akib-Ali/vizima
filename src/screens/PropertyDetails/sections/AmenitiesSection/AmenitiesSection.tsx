import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AmenitiesSection = (): JSX.Element => {
  // Define amenities data for easy mapping
  const amenitiesData = [
    [
      {
        name: "Bed & Mattress",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-fireplace.svg",
        alt: "Mdi fireplace",
      },
      {
        name: "Parking",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/fluent-mdl2-parking-solid.svg",
        alt: "Fluent parking",
      },
      {
        name: "Wardrobe",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-wardrobe.svg",
        alt: "Mdi wardrobe",
      },
    ],
    [
      {
        name: "Geyser",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-tumble-dryer.svg",
        alt: "Mdi tumble dryer",
      },
      {
        name: "CCTV",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/bxs-cctv.svg",
        alt: "Bxs cctv",
      },
      {
        name: "Housekeeping",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-fridge.svg",
        alt: "Mdi fridge",
      },
    ],
    [
      {
        name: "WiFi",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-phone-classic.svg",
        alt: "Mdi phone classic",
      },
      {
        name: "RO Water",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/vector-1.svg",
        alt: "Vector",
        customClass: "w-[30px] h-[33.33px]",
      },
      {
        name: "Laundry",
        icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-washing-machine.svg",
        alt: "Mdi washing machine",
      },
    ],
  ];

  return (
    <section className="flex flex-col w-full items-center gap-[60px] py-5">
      <h2 className="w-full font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
        Amenities
      </h2>

      <Card className="w-full border-none shadow-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-3 gap-[35px]">
            {amenitiesData.map((column, columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className="flex flex-col items-start gap-4"
              >
                {column.map((amenity, amenityIndex) => (
                  <div
                    key={`amenity-${columnIndex}-${amenityIndex}`}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
                      {amenity.name}
                    </div>
                    <img
                      className={amenity.customClass || "w-10 h-10"}
                      alt={amenity.alt}
                      src={amenity.icon}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
