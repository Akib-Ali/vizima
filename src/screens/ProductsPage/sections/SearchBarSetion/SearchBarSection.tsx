import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const SearchBarSection = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-between gap-4 p-1.5 pl-6 bg-white rounded-[40px] border-4 border-solid border-green">
      <Input
        className="flex-1 border-none shadow-none focus-visible:ring-0 font-desktop-subtitle-bold text-text placeholder:text-text"
        placeholder="SearchIcon Listings or Find PGs"
      />

      <div className="flex items-center">
        <SearchIcon className="w-10 h-10 text-green relative right-2" />
        <Button className="bg-green hover:bg-green/90 text-white rounded-[40px] font-desktop-subtitle-bold px-10 py-3">
          SearchIcon
        </Button>
      </div>
    </div>
  );
};
