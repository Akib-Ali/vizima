import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { label: "Home", width: "w-fit" },
    { label: "Find PG/Hostel", width: "w-[149px]" },
    { label: "Book a Visit", width: "w-fit" },
    { label: "Blog", width: "w-fit" },
    { label: "Contact Us", width: "w-fit" },
  ];

  return (
    <header className="flex flex-col w-full h-[83px] items-start justify-center px-[60px] py-0 sticky top-0 left-0 bg-white z-10">
      <div className="flex w-full items-center justify-between">
        <img
          className="w-[141px] h-[47px]"
          alt="Vizima logo"
          src="https://c.animaapp.com/mb8dvo30LDNV4D/img/vizima--logo-01--1--1.png"
        />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-10">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`${item.width} [font-family:'Lato',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Button className="px-10 py-3 bg-green rounded-[40px] text-white font-desktop-subtitle-bold text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
                Login
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
