import React from "react";
import mainImage from "../../public/mainMode.svg";
import Image from "next/image";

const Maintenance = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4 text-center">
      <div className="flex flex-col items-center max-w-md space-y-6">
        <WrenchIcon className=" h-25 w-25 " />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Site Under Maintenance
        </h1>
        <p className="text-muted-foreground">
          We're currently performing scheduled maintenance to improve your
          experience. Please check back soon.
        </p>
      </div>
    </div>
  );
};

function WrenchIcon(props) {
  return (
    <Image src={mainImage} alt="Maintenance Mode" width={500} height={500} />
  );
}

export default Maintenance;
