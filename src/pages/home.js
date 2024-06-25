import SideBar from "@/components/SideBar";
import Main from "@/components/Main";
import React from "react";

const home = () => {
  return (
    <div className="flex max-sm:justify-center">
      <SideBar />

      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-wrap gap-4">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default home;
