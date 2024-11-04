import React from "react";
import loading from "../../public/loading.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Image
        src={loading}
        alt="loading..."
        height={150}
        width={150}
        className="mix-blend-lighten"
      />
      <h1 className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-700">
        beta 1.3.0
      </h1>
    </div>
  );
};

export default Loader;
