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
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Find PG/Hostel", href: "#" },
    { label: "Book a Visit", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="flex w-full h-[83px] items-center justify-center px-[60px] py-0 fixed top-0 left-0 bg-white z-10">
      <div className="flex w-full max-w-[1300px] items-center justify-between">
        <img
          className="w-[141px] h-[47px]"
          alt="Vizima logo"
          src="https://c.animaapp.com/mbdfcvegHJjZtn/img/vizima--logo-01--1--1.png"
        />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-['Lato',Helvetica] font-semibold text-text text-lg leading-6"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Button className="px-10 py-3 bg-green rounded-[40px] text-white font-desktop-subtitle-bold">
                Login
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
