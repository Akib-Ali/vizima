import React from "react";

export const LocationMapSection = (): JSX.Element => {
  // Location marker data with size variants, positions and counts
  const locationMarkers = [
    { count: 40, size: "large", top: "475px", left: "283px" },
    { count: 12, size: "medium", top: "338px", left: "193px" },
    { count: 8, size: "small", top: "534px", left: "135px" },
    { count: 1, size: "small", top: "392px", left: "329px" },
    { count: 2, size: "small", top: "602px", left: "289px" },
    { count: 20, size: "large", top: "373px", left: "75px" },
    { count: 16, size: "medium", top: "249px", left: "337px" },
    { count: 2, size: "small", top: "168px", left: "218px" },
  ];

  // Size configurations for different marker sizes
  const sizeConfig = {
    large: {
      containerClass: "w-[60px] h-[68px]",
      markerClass: "h-[60px] rounded-[30px] border-8",
      textClass: "top-[9px] left-3",
    },
    medium: {
      containerClass: "w-12 h-[54px]",
      markerClass: "h-12 rounded-3xl border-[6px]",
      textClass: "top-[5px] left-2",
    },
    small: {
      containerClass: "w-10 h-[45px]",
      markerClass: "h-10 rounded-[20px] border-4",
      textClass: "top-[3px] left-[11px]",
    },
  };

  return (
    <div className="relative w-full h-[900px] bg-[url(https://c.animaapp.com/mbdfcvegHJjZtn/img/map.png)] bg-cover bg-[50%_50%]">
      {locationMarkers.map((marker, index) => (
        <div
          key={index}
          className={`absolute ${sizeConfig[marker.size].containerClass}`}
          style={{ top: marker.top, left: marker.left }}
        >
          <div
            className={`relative ${sizeConfig[marker.size].markerClass} bg-bg border-solid border-[#49735a]`}
          >
            <div
              className={`absolute ${sizeConfig[marker.size].textClass} font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-text text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] whitespace-nowrap [font-style:var(--desktop-subtitle-bold-font-style)]`}
            >
              {marker.count}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
