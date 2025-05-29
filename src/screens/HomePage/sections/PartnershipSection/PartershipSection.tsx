import { ArrowDownIcon, CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Select ,SelectTrigger, SelectValue, SelectContent, SelectItem} from "../../../../components/ui/select";

export const PartnershipSection = (): JSX.Element => {
  const formFields = [
    {
      id: "date",
      label: "Select Date",
      placeholder: "Choose a date",
      icon: <CalendarIcon />,  // Add your calendar icon or remove
      type: "date",  // For static calendar input
      hasDropdown: false,
    },
    {
      id: "service",
      label: "Service Type",
      placeholder: "Select service",
      icon: "",
      hasDropdown: true,
      options: [
        { value: "consulting", label: "Consulting" },
        { value: "development", label: "Development" },
        { value: "design", label: "Design" },
      ],
    },
    // Add other fields as needed
  ];


  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-center py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%), url('https://c.animaapp.com/mb8dvo30LDNV4D/img/bespoke-partnerships.png')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Text Area */}
        <div className="flex flex-col items-start justify-center gap-8 max-w-xl">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className="text-white text-3xl sm:text-4xl font-bold">
              Visit Before You Book
            </h2>
            <p className="text-white text-base sm:text-lg">
              Schedule in-person or virtual tours easily.
            </p>
          </div>
          <Button className="px-10 py-3 rounded-full bg-green hover:bg-green/90 text-white text-base font-semibold">
            Start booking
          </Button>
        </div>

        <Card className="w-full max-w-md bg-white/80 rounded-3xl shadow-cards">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {field.icon}
                    <span className="text-black text-sm font-semibold">{field.label}</span>
                    {field.hasDropdown && <ArrowDownIcon className="w-4 h-4" />}
                  </div>

                  {field.hasDropdown ? (
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 bg-white rounded-xl">
                        <SelectValue placeholder={field.placeholder} className="text-gray-600 text-sm" />
                      </SelectTrigger>
                      <SelectContent>
                        {field?.options?.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.type === "date" ? (
                    // Static input type=date calendar
                    <Input
                      type="date"
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-white rounded-xl text-sm text-gray-600"
                    />
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-white rounded-xl text-sm text-gray-600"
                    />
                  )}
                </div>
              ))}

              <Button className="mt-4 px-10 py-3 rounded-full bg-green hover:bg-green/90 text-white text-base font-semibold">
                Start booking
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

