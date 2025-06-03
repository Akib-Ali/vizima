import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const FAQSection = (): JSX.Element => {
  // Form field data
  const timeSlots = [
    { id: 1, time: "10:00 AM" },
    { id: 2, time: "12:00 PM" },
    { id: 3, time: "02:00 PM" },
  ];

  // Calendar data
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Card className="w-full max-w-[600px] bg-[#e2f1e8] border-[#c3d0d7] rounded-xl p-8">
      <CardContent className="p-0 space-y-6">
        {/* Full Name Field */}
        <div className="space-y-2">
          <label className="font-desktop-subtitle-bold text-text pl-2.5 block">
            Full Name
          </label>
          <Input
            className="h-[52px] bg-white rounded-xl border-[#c3d0d7] pl-6 font-desktop-subtitle text-text"
            placeholder="Full Name"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="space-y-2">
          <label className="font-desktop-subtitle-bold text-text pl-2.5 block">
            Mobile Number
          </label>
          <Input
            className="h-[52px] bg-white rounded-xl border-[#c3d0d7] pl-6 font-desktop-subtitle text-text"
            placeholder="+91- XXXXX XXXXX"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="font-desktop-subtitle-bold text-text pl-2.5 block">
            E-mail
          </label>
          <Input
            className="h-[52px] bg-white rounded-xl border-[#c3d0d7] pl-6 font-desktop-subtitle text-text"
            placeholder="E-mail"
          />
        </div>

        {/* Gender Field */}
        <div className="space-y-2">
          <label className="font-desktop-subtitle-bold text-text pl-2.5 block">
            Gender
          </label>
          <Select defaultValue="male">
            <SelectTrigger className="h-[52px] bg-white rounded-xl border-[#c3d0d7] pl-6 font-desktop-subtitle text-text">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Double Sharing Field */}
        <div className="space-y-2">
          <div className="flex items-center pl-2.5">
            <label className="font-desktop-subtitle-bold text-text">
              Double Sharing
            </label>
            <ChevronRightIcon className="w-[31px] h-[26px] ml-2" />
          </div>
          <Input
            className="h-[52px] bg-white rounded-xl border-[#c3d0d7] pl-6 font-desktop-subtitle text-text"
            defaultValue="Comfort Stay PG"
            readOnly
          />
        </div>

        {/* Preferred Property Name Field */}
        <div className="space-y-2">
          <div className="flex items-center pl-2.5">
            <label className="font-desktop-subtitle-bold text-text">
              Preferred Property Name
            </label>
            <ChevronRightIcon className="w-[31px] h-[26px] ml-2" />
          </div>
          <Input
            className="h-[52px] bg-white rounded-xl border-[#c3d0d7] pl-6 font-desktop-subtitle text-text"
            defaultValue="Comfort Stay PG"
            readOnly
          />
        </div>

        {/* Calendar Section */}
        <div className="space-y-2">
          <label className="font-desktop-subtitle-bold text-text pl-2.5 block">
            Choose a suitable Date And Time
          </label>
          <Card className="bg-white rounded-xl border-[#c3d0d7] p-2">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-2">
              <ChevronLeftIcon className="w-[31px] h-[26px]" />
              <div className="font-desktop-subtitle-bold text-text text-center">
                AUG 2025
              </div>
              <ChevronRightIcon className="w-[31px] h-[26px]" />
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 bg-[#f2f0f2] border border-[#c3d0d7]">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className="h-[42px] flex items-center justify-center font-extrabold text-text text-lg"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {/* Empty cells for days before the 1st */}
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <div key={`empty-${index}`} className="h-[39px]"></div>
                ))}

              {/* Actual calendar days */}
              {calendarDays.map((day) => (
                <div
                  key={day}
                  className="h-[39px] flex items-center justify-center font-desktop-subtitle text-text"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="flex justify-between items-center mt-4 h-[60px] bg-white rounded-xl border border-[#c3d0d7] p-3">
              <ChevronLeftIcon className="w-[31px] h-[26px]" />
              <div className="flex space-x-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.id}
                    variant="outline"
                    className="h-9 w-[141px] bg-[#f2f0f2] rounded-xl border-[#c3d0d7] font-desktop-subtitle text-text"
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
              <ChevronRightIcon className="w-[31px] h-[26px]" />
            </div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
