"use client";

import { MapPinIcon, SearchIcon } from "lucide-react";
<<<<<<< HEAD
import { MdAddLocationAlt } from "react-icons/md";
=======
>>>>>>> 9d321a1b7e4c85d673cf9fca8a96fb4a3cc61e15
import { Separator } from "../../../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { useState } from "react";


export const SearchSection = (): JSX.Element => {
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"];
  const genders = ["Male", "Female", "Unisex"];

  return (
<<<<<<< HEAD
    <div className="flex flex-col lg:flex-row w-full items-stretch lg:items-center justify-between gap-4 px-6 py-4 bg-white rounded-[15px] border-4 border-solid border-green shadow-sm h-16 mb-[15px]">
      {/* City selector */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 w-full lg:w-auto">
        <div className="flex items-center gap-2">
          <MdAddLocationAlt className="w-5 h-5 text-text" />
          {/* <label className="font-semibold text-text">City:</label> */}
        </div>

        <Select value={city} onValueChange={(value) => setCity(value)}>
          <SelectTrigger className="w-full lg:w-[180px] font-semibold text-gray-800">
=======
    <div className="flex flex-col lg:flex-row w-full items-stretch lg:items-center justify-between gap-4 px-6 py-4 bg-white rounded-[15px] border-4 border-solid border-green shadow-sm">
      {/* City selector */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 w-full lg:w-auto">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5 text-text" />
          <label className="font-semibold text-text">City:</label>
        </div>

        <Select value={city} onValueChange={(value) => setCity(value)}>
          <SelectTrigger className="w-full lg:w-[180px]">
>>>>>>> 9d321a1b7e4c85d673cf9fca8a96fb4a3cc61e15
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((cityOption) => (
              <SelectItem key={cityOption} value={cityOption}>
                {cityOption}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Divider */}
      <div className="hidden lg:block">
        <Separator orientation="vertical" className="h-12" />
      </div>

      {/* Gender selector */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 w-full lg:w-auto">
        <div className="flex items-center gap-2">
          <img
            className="w-5 h-5"
            alt="Gender"
            src="https://c.animaapp.com/mb8dvo30LDNV4D/img/vector.svg"
          />
<<<<<<< HEAD
          {/* <label className="font-semibold text-text">Gender:</label> */}
        </div>

        <Select value={gender} onValueChange={(value) => setGender(value)}>
          <SelectTrigger className="w-full lg:w-[180px] font-semibold text-gray-800">
            <SelectValue placeholder="Gender" />
=======
          <label className="font-semibold text-text">Gender:</label>
        </div>

        <Select value={gender} onValueChange={(value) => setGender(value)}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Select gender" />
>>>>>>> 9d321a1b7e4c85d673cf9fca8a96fb4a3cc61e15
          </SelectTrigger>
          <SelectContent>
            {genders.map((g) => (
              <SelectItem key={g} value={g}>
                {g}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

<<<<<<< HEAD
      <div className="relative w-full lg:w-[302px] width: 302px; mr-[-23px] -302px">
=======
      <div className="relative w-full lg:w-[220px]">
>>>>>>> 9d321a1b7e4c85d673cf9fca8a96fb4a3cc61e15
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
        <Input
          type="text"
          placeholder="Search..."
<<<<<<< HEAD
          className="h-[50px] pl-14 bg-green text-white placeholder:text-white rounded-[15px] border border-green"
=======
          className="pl-14 bg-green text-white placeholder:text-white rounded-[15px] border border-green"
>>>>>>> 9d321a1b7e4c85d673cf9fca8a96fb4a3cc61e15
        />
      </div>

    </div>
  );
};

