import React from "react";

export const Progress = ({ color, percentage }) => {
  return (
    <div>
      <span className="absolute top-0 right-2 text-red-600 font-mono">
        {percentage}%
      </span>
      <div className="bg-gray-200 h-2 rounded-full overflow-hidden mt-2 ">
        <div
          className={`h-full  ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
