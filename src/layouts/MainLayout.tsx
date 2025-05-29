// import { ReactNode } from 'react';
// import { NavigationMenu } from '../components/ui/navigation-menu';
// import { BulkAccommodationSection } from '../screens/HomePage/sections/BulkAccommodationSection/BulkAccommodationSection';

// type LayoutProps = {
//   children: ReactNode;
// };

// const MainLayout = ({ children }: LayoutProps) => (
//   <div className="flex flex-col min-h-screen">
//     <NavigationMenu />
//     <main className="flex-grow">{children}</main>
//     <BulkAccommodationSection />
//   </div>
// );

// export default MainLayout;



import { Outlet } from "react-router-dom";
import { NavigationMenuSection } from "../screens/HomePage/sections/NavigationMenuSection/NavigationMenuSection";
import { BulkAccommodationSection } from "../screens/HomePage/sections/BulkAccommodationSection/BulkAccommodationSection";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuSection />
      <main className="flex-grow">
        <Outlet />
      </main>
      <BulkAccommodationSection />
    </div>
  );
};

export default MainLayout;

