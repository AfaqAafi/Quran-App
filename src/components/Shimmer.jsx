import React from "react";

const Shimmer = () => {
  const data = new Array(5).fill(null);
  return (
    <div className="flex flex-col gap-2 mb-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-[140px] border-b-2 border-green-500 duration-75 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 rounded animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
