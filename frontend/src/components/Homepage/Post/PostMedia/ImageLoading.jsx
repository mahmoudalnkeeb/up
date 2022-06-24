import React from "react";

function ImageLoading() {
  return (
    <div className="flex items-center flex-col justify-center gap-3 py-5 w-96 h-36 rounded-lg bg-slate-300 animate-pulse">
      <div className="w-4/5 h-4/5 flex items-center justify-center gap-3">
        <div className="w-7 h-7 aspect-square rounded-full bg-gray-700"></div>
        <div className="w-28 h-3 rounded-md bg-gray-700"></div>
        <div className="w-full h-3 rounded-md bg-gray-700"></div>
      </div>
      <div className="w-4/5 h-4/5 flex-wrap flex items-center justify-between gap-3 mt-4">
        <div className="w-9 h-3 rounded-md bg-gray-700"></div>
        <div className="w-40 h-3 rounded-md bg-gray-700"></div>
        <div className="w-11 h-3 rounded-md bg-gray-700"></div>
        <div className="w-12 h-3 rounded-md bg-gray-700"></div>
        <div className="w-24 h-3 rounded-md bg-gray-700"></div>
        <div className="w-12 h-3 rounded-md bg-gray-700"></div>
        <div className="w-16 h-3 rounded-md bg-gray-700"></div>
        <div className="w-28 h-3 rounded-md bg-gray-700"></div>
        <div className="w-32 h-3 rounded-md bg-gray-700"></div>
        <div className="w-32 h-3 rounded-md bg-gray-700"></div>
      </div>
    </div>
  );
}

export default ImageLoading;
