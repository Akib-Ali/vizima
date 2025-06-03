import { FacebookIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const BulkAccommodationSection = (): JSX.Element => {
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
    <div className="w-full bg-[#e2f1e8] py-6">
      <footer className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and contact info column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <img
              className="w-[174px] h-[58px]"
              alt="Logo"
              src="https://c.animaapp.com/mb8dvo30LDNV4D/img/logo.png"
            />

            <div className="flex flex-col gap-5">
              <div className="font-desktop-text-regular text-text">
                Contact number: 02033074477
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Instagram"
                      src="https://c.animaapp.com/mb8dvo30LDNV4D/img/group-3.png"
                    />
                  </div>
                  <FacebookIcon className="w-6 h-6 text-text" />
                  <TwitterIcon className="w-6 h-6 text-text" />
                </div>

                <div className="font-desktop-text-regular text-text">
                  © Vizima 2025
                </div>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-5 grid grid-cols-3 gap-[60px]">
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-4">
                <div className="font-desktop-subtitle-bold text-text">
                  {section.title}
                </div>
                {section.links.map((link, index) => (
                  <div key={index} className="font-desktop-subtitle text-text">
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="font-desktop-subtitle-bold text-text">
                Stay up to date
              </div>
              <div className="font-desktop-subtitle text-text">
                Be the first to know about our newest apartments
              </div>
            </div>

            <Input
              className="h-[48px] px-10 py-3 bg-bg rounded-xl text-[#49735a] font-desktop-subtitle"
              placeholder="Email address"
            />

            <Button className="h-[48px] w-[158px] px-10 py-3 bg-green rounded-[40px] font-desktop-subtitle-bold text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
