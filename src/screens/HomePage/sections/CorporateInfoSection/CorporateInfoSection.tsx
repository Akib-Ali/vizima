import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the cards to enable mapping
const accommodationCards = [
  {
    title: "For interns",
    description: "Comfortable, budget stays near offices.",
    backgroundImage: "https://c.animaapp.com/mb8dvo30LDNV4D/img/1.png",
  },
  {
    title: "For Employees",
    description: "", // No description in the original code
    backgroundImage: "https://c.animaapp.com/mb8dvo30LDNV4D/img/4.png",
  },
  {
    title: "For Students",
    description: "", // No description in the original code
    backgroundImage: "https://c.animaapp.com/mb8dvo30LDNV4D/img/3.png",
  },
];

export const CorporateInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[60px] py-[140px] px-20">
      <header className="items-center justify-center relative self-stretch w-full flex flex-col gap-4">
        <h2 className="relative self-stretch mt-[-1.00px] font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
          Bulk Accommodation Solutions
        </h2>

        <p className="relative max-w-[782px] font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
          Vizima offers bulk accommodation solutions for corporates and
          universities—safe, affordable PGs for interns, employees, and students
          with full amenities.
        </p>
      </header>

      <div className="flex items-start gap-5 relative self-stretch w-full">
        {accommodationCards.map((card, index) => (
          <Card
            key={index}
            className="flex-1 rounded-[30px] overflow-hidden border-0 shadow-none"
            style={{
              background: `linear-gradient(270deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 100%), url(${card.backgroundImage}) 50% 50% / cover`,
            }}
          >
            <CardContent className="flex flex-col items-start gap-4 px-10 py-8">
              <h4 className="relative self-stretch mt-[-1.00px] font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-white text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
                {card.title}
              </h4>

              <div className="relative w-[60px] h-[60px] rounded-[100px] bg-white/10 flex items-center justify-center">
                <ArrowUpIcon className="w-[46px] h-[46px] text-white" />
              </div>

              {card.description && (
                <p className="relative self-stretch font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-white text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
                  {card.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
