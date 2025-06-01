import { FacebookIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const UserGroupSection = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = {
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
    <section className="w-full bg-[#e2f1e8] py-6">
      <footer className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and contact info */}
          <div className="md:col-span-3">
            <img
              className="h-[58px] w-auto"
              alt="Logo"
              src="https://c.animaapp.com/mbdfcvegHJjZtn/img/logo.png"
            />

            <div className="mt-6 space-y-5">
              <div className="font-desktop-text-regular text-text">
                Contact number: 02033074477
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[18px] h-[18px] top-[3px] left-[3px]"
                      alt="Group"
                      src="https://c.animaapp.com/mbdfcvegHJjZtn/img/group-10.png"
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

          {/* Navigation links */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-3 gap-8">
              {Object.values(footerLinks).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h4 className="font-desktop-subtitle-bold text-text">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="font-desktop-subtitle text-text hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-4 space-y-5">
            <div className="space-y-2">
              <h4 className="font-desktop-subtitle-bold text-text">
                Stay up to date
              </h4>
              <p className="font-desktop-subtitle text-text">
                Be the first to know about our newest apartments
              </p>
            </div>

            <div className="space-y-4">
              <Input
                placeholder="Email address"
                className="bg-bg rounded-xl px-10 py-3 h-auto font-desktop-subtitle text-[#49735a]"
              />

              <Button className="bg-green hover:bg-green/90 text-white rounded-[40px] px-10 py-3 h-auto font-desktop-subtitle-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
