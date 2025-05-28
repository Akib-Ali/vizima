

import { MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const SearchSection = (): JSX.Element => {
  // Data for filters that can be mapped over
  const filters = [
    {
      icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/vector.svg",
      label: "Gender",
      hasArrow: true,
    },
  ];

  return (
    <div className="flex w-full items-center justify-between px-10 py-1.5 bg-white rounded-[15px] border-4 border-solid border-green">
      {/* City selector */}
      <div className="inline-flex items-center gap-3 relative">
        <div className="relative w-6 h-6">
          <MapPinIcon className="w-6 h-6 text-text" />
        </div>

        <div className="font-desktop-subtitle-bold text-text">
          Select a city
        </div>

        <img
          className="w-6 h-6"
          alt="Arrow icon"
          src="https://c.animaapp.com/mb8dvo30LDNV4D/img/asset---icon---arrow.svg"
        />
      </div>

      {/* Divider */}
      <Separator orientation="vertical" className="h-12" />

      {/* Filters section */}
      <div className="inline-flex items-start gap-5">
        {filters.map((filter, index) => (
          <div key={index} className="inline-flex items-center gap-2">
            <img
              className="w-[26px] h-6"
              alt={filter.label + " icon"}
              src={filter.icon}
            />

            <div className="font-desktop-subtitle-bold text-text">
              {filter.label}
            </div>

            {filter.hasArrow && (
              <div className="w-5 h-5 bg-[url(https://c.animaapp.com/mb8dvo30LDNV4D/img/asset---icon---arrow.svg)] bg-[100%_100%]" />
            )}
          </div>
        ))}
      </div>

      {/* SearchIcon button */}
      <Button className="flex items-center gap-2.5 px-10 py-3 rounded-[15px] bg-green text-white">
        <SearchIcon className="w-7 h-7" />
        <span className="font-desktop-subtitle-bold">SearchIcon</span>
      </Button>
    </div>
  );
}
