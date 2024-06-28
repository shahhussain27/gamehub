import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent" />
      <p className="mt-4 text-muted-foreground">Loading games...</p>
    </div>
  );
};

export default Loader;
