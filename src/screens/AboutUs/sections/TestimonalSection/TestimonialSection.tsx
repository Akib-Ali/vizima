import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="w-full h-[360px] bg-[url(https://c.animaapp.com/mbdzidxxXFHXM9/img/image-1.png)] bg-cover bg-center relative">
        <div className="container mx-auto">
          <div className="flex flex-col max-w-[1075px] items-start gap-6 py-20">
            <h2 className="font-desktop-h1 font-[number:var(--desktop-h1-font-weight)] text-white text-[length:var(--desktop-h1-font-size)] tracking-[var(--desktop-h1-letter-spacing)] leading-[var(--desktop-h1-line-height)] [text-shadow:0px_4px_87.5px_#00000040] [font-style:var(--desktop-h1-font-style)]">
              Looking for your next PG or hostel?
            </h2>

            <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-white text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [text-shadow:0px_4px_87.5px_#00000040] [font-style:var(--desktop-subtitle-font-style)]">
              At Vizima, our goal is simple — to take the stress out of finding
              safe, comfortable,&nbsp;&nbsp;and affordable PGs &amp; hostels.
              Whether you&apos;re a student or a working
              professional,&nbsp;&nbsp;we bring you verified spaces with meals,
              amenities, and full transparency.
            </p>

            <Button className="bg-green hover:bg-green/90 text-white rounded-[40px] px-10 py-3 mt-2">
              <span className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
                Start Exploring
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
