import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Main from "@/components/Main";
import React from "react";

const home = () => {
  return (
    <div className="flex max-sm:justify-center">
      <SideBar />

      <div className="flex flex-col gap-4">
        <TopBar />
        <div className="flex flex-wrap gap-4">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default home;
