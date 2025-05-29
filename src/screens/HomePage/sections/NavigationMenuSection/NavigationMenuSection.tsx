// import { Button } from "../../../../components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "../../../../components/ui/navigation-menu";
// import { Link } from "react-router-dom";

// export const NavigationMenuSection = (): JSX.Element => {
//   const menuItems = [
//     { label: "Home", width: "w-fit" },
//     { label: "Find PG/Hostel", width: "w-[149px]" },
//     { label: "Book a Visit", width: "w-fit" },
//     { label: "Blog", width: "w-fit" },
//     { label: "Contact Us", width: "w-fit" },
//   ];

//   return (
//     <header className="flex flex-col w-full h-[83px] items-start justify-center px-[60px] py-0 sticky top-0 left-0 bg-white z-10">
//       <div className="flex w-full items-center justify-between">
//         <img
//           className="w-[141px] h-[47px]"
//           alt="Vizima logo"
//           src="https://c.animaapp.com/mb8dvo30LDNV4D/img/vizima--logo-01--1--1.png"
//         />

//         <NavigationMenu>
//           <NavigationMenuList className="flex items-center gap-10">
//             {menuItems.map((item, index) => (
//               <NavigationMenuItem key={index}>
//                 <NavigationMenuLink
//                   className={`${item.width} [font-family:'Lato',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6`}
//                 >
//                   {item.label}
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             ))}
//             <NavigationMenuItem>
//               <Button className="px-10 py-3 bg-green rounded-[40px] text-white font-desktop-subtitle-bold text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
//                 Login
//               </Button>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//       </div>
//     </header>
//   );
// };



import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const NavigationMenuSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Find PG/Hostel", path: "/find-pg" },
    { label: "Book a Visit", path: "/book-visit" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 bg-white z-50 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <img
          className="w-[141px] h-[47px]"
          alt="Vizima logo"
          src="https://c.animaapp.com/mb8dvo30LDNV4D/img/vizima--logo-01--1--1.png"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    to={item.path}
                    className="font-semibold text-gray-800 hover:text-green-600 transition"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button className="px-6 py-2 bg-green rounded-full text-white font-semibold">
                  Login
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-800 font-medium hover:text-green-600 transition"
              onClick={() => setIsMobileMenuOpen(false)} // Close on click
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-2 px-6 py-2 bg-green rounded-full text-white font-semibold w-full text-center">
            Login
          </Button>
        </div>
      )}
    </header>
  );
};

