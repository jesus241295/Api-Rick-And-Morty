import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-stone-700 w-full h-screen">
      <div className="flex items-center flex-col   w-80">
        <ImSpinner9 className="h-12 w-10 text-orange-500 animate-spin" />
        <h4 className="text-white text-xl mt-10">Loading...</h4>
      </div>
    </div>
  );
};

export default Loading;
