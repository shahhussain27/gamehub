import React from "react";
import { topbar } from "@/constants";

const TopBar = () => {
  return (
    <div>
      <div className="flex  items-center gap-4 p-4">
        <h2 className="">Filters</h2>
        {topbar.map((item, index) => (
          <select
            key={index}
            name={item.name}
            className="py-2 pl-2 pr-6 rounded-md cursor-pointer bg-gray-100 hover:bg-white border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            {item.options.map((option, idx) => (
              <option
                key={idx}
                value={option.filter}
                className="py-2 pl-2 pr-6 bg-white hover:bg-gray-100"
              >
                {option.label || option.lable}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
