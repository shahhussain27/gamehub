import React from "react";
import loading from "../../public/loader.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Image src={loading} alt="loading" height={100} width={100} />
      <p className="mt-4 font-semibold text-xl bg-gradient-to-r from-gray-900 to-slate-300 text-transparent bg-clip-text">
        Loading Games...
      </p>
    </div>
  );
};

export default Loader;
