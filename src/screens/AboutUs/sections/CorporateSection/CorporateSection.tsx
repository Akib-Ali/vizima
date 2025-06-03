import { LockIcon, TagIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: <LockIcon className="w-[60px] h-[60px]" />,
    title: "Verified Listings",
    description: "Inspected PGs and hostels only",
  },
  {
    icon: <TagIcon className="w-[60px] h-[60px]" />,
    title: "Includes Meals",
    description: "Delicious home-style meals daily",
  },
  {
    // Using custom image for Wi-Fi since the Lucide icon doesn't match exactly
    iconImg: "https://c.animaapp.com/mbdzidxxXFHXM9/img/group.png",
    title: "High-Speed Wi-Fi",
    description: "Buffer-free work & entertainment",
  },
  {
    // Using custom image for Safe Booking since the Lucide icon doesn't match exactly
    iconImg: "https://c.animaapp.com/mbdzidxxXFHXM9/img/group-1.png",
    title: "Safe Booking",
    description: "Fully digital and secure payments",
  },
];

export const CorporateSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[60px] px-20 py-0">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h2 className="w-full font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
          WHy Vizima?
        </h2>

        <p className="w-full max-w-[760px] font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
          Vizima offers verified PGs with meals, Wi-Fi, secure booking, and
          roommate options—ensuring a safe, comfortable, and hassle-free stay.
        </p>
      </div>

      <div className="flex items-start gap-5 w-full">
        {features.map((feature, index) => (
          <Card key={index} className="flex-1 bg-bg rounded-[30px] border-none">
            <CardContent className="flex flex-col items-start gap-4 px-10 py-8">
              {feature.icon ? (
                feature.icon
              ) : (
                <div className="relative w-[60px] h-[60px]">
                  <img
                    className={
                      index === 2
                        ? "absolute w-[50px] h-10 top-2.5 left-[5px]"
                        : "absolute w-[54px] h-[60px] top-0 left-[3px]"
                    }
                    alt={feature.title}
                    src={feature.iconImg}
                  />
                </div>
              )}

              <h4 className="self-stretch font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
                {feature.title}
              </h4>

              <p className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
