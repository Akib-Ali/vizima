import React from "react";
import { Button } from "../../../../components/ui/button";

export const PropertyDescriptionSection = (): JSX.Element => {
  // Owner information data
  const ownerInfo = {
    title: "About the Property Owner / Warden",
    description: `Owner/Warden Name -
Experience, how they manage PG - In nullam eget urna suspendisse odio nunc. Eu sodales vestibulum, donec rutrum justo, amet porttitor vitae et. Interdum consectetur dictum mattis gravida sed vulputate. Tempus sagittis cras sagittis viverra erat proin duis enim.  
Phone Number: +91- xxxxx xxxxx`,
    buttonText: "Contact Now",
  };

  return (
    <section className="w-full py-8 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-['Lato',Helvetica] font-bold text-text text-4xl leading-[54px]">
          {ownerInfo.title}
        </h2>

        <p className="font-desktop-text-regular text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)]">
          {ownerInfo.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < ownerInfo.description.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>

      <Button className="rounded-[40px] px-10 py-3 bg-green text-white font-desktop-subtitle-bold text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] w-fit">
        {ownerInfo.buttonText}
      </Button>
    </section>
  );
};
