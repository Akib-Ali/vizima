import { FacebookIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const ServicesSection = (): JSX.Element => {
  // Footer navigation data
  const footerNavigation = {
    company: {
      title: "Company",
      links: ["Home", "About us"],
    },
    guests: {
      title: "Guests",
      links: ["Blog", "FAQ", "Career"],
    },
    privacy: {
      title: "Privacy",
      links: ["Terms of Service", "Privacy Policy"],
    },
  };

  return (
    <section className="w-full bg-[#e2f1e8] py-[52px]">
      <footer className="container mx-auto max-w-[1300px] bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and contact info column */}
          <div className="md:col-span-3">
            <img
              className="h-[58px] w-[174px]"
              alt="Logo"
              src="https://c.animaapp.com/mbdzidxxXFHXM9/img/logo.png"
            />

            <div className="mt-6 flex flex-col gap-5">
              <p className="font-desktop-text-regular text-text">
                Contact number: 02033074477
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-6 w-6">
                    <img
                      className="absolute left-[3px] top-[3px] h-[18px] w-[18px]"
                      alt="Group"
                      src="https://c.animaapp.com/mbdzidxxXFHXM9/img/group-3.png"
                    />
                  </div>

                  <div className="relative h-6 w-6">
                    <FacebookIcon className="h-6 w-6" />
                  </div>

                  <div className="relative h-6 w-6">
                    <TwitterIcon className="h-6 w-6" />
                  </div>
                </div>

                <p className="font-desktop-text-regular text-text">
                  © Vizima 2025
                </p>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-5 flex gap-[60px]">
            {/* Company links */}
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-4">
                <h4 className="font-desktop-subtitle-bold text-text">
                  {section.title}
                </h4>

                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-desktop-subtitle text-text hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h4 className="font-desktop-subtitle-bold text-text">
                Stay up to date
              </h4>
              <p className="font-desktop-subtitle text-text">
                Be the first to know about our newest apartments
              </p>
            </div>

            <Input
              placeholder="Email address"
              className="bg-bg px-10 py-3 rounded-xl text-[#49735a] font-desktop-subtitle"
            />

            <Button className="bg-green hover:bg-green/90 rounded-[40px] px-10 py-3 font-desktop-subtitle-bold text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </footer>
    </section>
  );
};
