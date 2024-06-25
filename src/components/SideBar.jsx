import React from "react";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import logo from "../../public/gamehub.png";
import Image from "next/image";

const SideBar = () => {
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
              height={100}
              width={100}
              className="w-10 h-10"
            />
            <span className="text-lg">GameHub</span>
          </Link>
        </div>

        <nav className="flex flex-col gap-2 py-4">
          {sidebarLinks.map((link) => {
            return (
              <button className="group flex items-center gap-3 rounded-md  text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground">
                <span className="flex-1 data-[collapsed=true]:hidden text-lg text-start hover:bg-gray-100 px-6 py-2">
                  {link.label} <span className="text-gray-500">(1)</span>
                </span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="flex-1 p-6" />
    </div>
  );
};

export default SideBar;
