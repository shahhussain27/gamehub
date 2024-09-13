import React, { useState } from "react";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import logo from "../../public/gamehub.png";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SideBar = () => {
  const [openLink, setOpenLink] = useState(null);

  const handleLinkClick = (label) => {
    setOpenLink((prevOpenLink) => (prevOpenLink === label ? null : label));
  };

  return (
    <div className="flex h-screen max-sm:hidden">
      <div className="bg-background border-r border-border w-64 transition-all data-[collapsed=true]:w-16 data-[collapsed=true]:px-2">
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            href={"/"}
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <Image
              src={logo}
              alt="gamehub"
              height={50}
              width={50}
              className="invert"
            />
            <span className="text-lg">STORE</span>
          </Link>
        </div>

        <nav className="flex flex-col gap-2 py-4">
          {sidebarLinks.map((link) => {
            const isOpen = openLink === link.label;
            return (
              <>
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.label)}
                  className="flex items-center gap-3 rounded-md text-sm font-medium "
                >
                  <span className="flex-1 text-lg text-start w-full hover:bg-gray-100 px-6 py-2">
                    {link.label} <span className="text-gray-500">(1)</span>
                  </span>
                </button>
                {isOpen && (
                  <div className="ml-6">
                    {link.options && link.options.length > 0 && (
                      <div className="flex flex-col items-start gap-2 ml-6">
                        {link.options.map((option) => (
                          <Label
                            key={option.label}
                            className="flex items-center gap-2"
                          >
                            <Checkbox id="windows" className="mr-2" />
                            {option.label}
                          </Label>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            );
          })}
        </nav>
      </div>
      <div className="flex-1 p-6" />
    </div>
  );
};

export default SideBar;
