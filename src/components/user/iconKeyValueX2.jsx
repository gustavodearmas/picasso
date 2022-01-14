import React from "react";

const IconKeyValueX2 = ({ icon, key_, value_, value_2}) => {
  return (
    <div className="flex text-xs mt-1 h-6">
      <div className="w-2/24">
        <i className={`text-sm text-gray-600 ${icon}`}></i>
      </div>
      <div className="w-10/24">
        <span className="ml-2">{key_}</span>
      </div>
      <div className="flex justify-start w-12/24">
        <span className="px-2 py-1 border border-gray-200 rounded w-full mr-1">{value_}</span>
        <span className="px-2 py-1 border border-gray-200 rounded w-full ml-1">{value_2}</span>
      </div>
    </div>
  );
};

export default IconKeyValueX2;
