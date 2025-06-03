import { CreditCardIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Data for feature cards to enable mapping
  const features = [
    {
      id: 1,
      icon: <SearchIcon className="w-20 h-20" />,
      title: "SearchIcon Easily",
      description:
        "Enter your city, choose filters, and browse verified stays.",
      position: "left",
    },
    {
      id: 2,
      icon: (
        <div className="relative w-20 h-20">
          <img
            className="w-[65px] h-[72px] mt-1 ml-2"
            alt="Book icon"
            src="https://c.animaapp.com/mbdzidxxXFHXM9/img/group-2.png"
          />
        </div>
      ),
      title: "Book Instantly or Schedule a Visit",
      description: "Choose what suits you — visit or book online securely.",
      position: "right",
    },
    {
      id: 3,
      icon: <CreditCardIcon className="w-20 h-20" />,
      title: "Pay & Move In",
      description: "Hassle-free online payment and digital documentation.",
      position: "left",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#e2f1e8]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-desktop-h2 text-[length:var(--desktop-h2-font-size)] font-[number:var(--desktop-h2-font-weight)] leading-[var(--desktop-h2-line-height)] tracking-[var(--desktop-h2-letter-spacing)] text-text mb-12">
          How it Works
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Timeline */}
          <div className="absolute h-full w-px bg-text left-1/2 transform -translate-x-1/2">
            {features.map((feature, index) => (
              <div
                key={`dot-${feature.id}`}
                className="absolute w-5 h-5 bg-text rounded-[10px] left-1/2 transform -translate-x-1/2"
                style={{ top: `${index * 212}px` }}
              />
            ))}
          </div>

          {/* Feature cards */}
          <div className="relative w-full">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-16 relative`}
                style={{ marginTop: index === 0 ? "0" : "60px" }}
              >
                <Card className="w-[497px] bg-[#ffffff80] rounded-[30px] border-none">
                  <CardContent
                    className={`p-6 flex flex-col ${feature.position === "left" ? "items-end text-right" : "items-start text-left"} gap-3`}
                  >
                    {feature.icon}

                    <h3 className="font-desktop-h3 text-[length:var(--desktop-h3-font-size)] font-[number:var(--desktop-h3-font-weight)] leading-[var(--desktop-h3-line-height)] tracking-[var(--desktop-h3-letter-spacing)] text-text w-full">
                      {feature.title}
                    </h3>

                    <p className="font-desktop-text-regular text-[length:var(--desktop-text-regular-font-size)] font-[number:var(--desktop-text-regular-font-weight)] leading-[var(--desktop-text-regular-line-height)] tracking-[var(--desktop-text-regular-letter-spacing)] text-text w-full">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
