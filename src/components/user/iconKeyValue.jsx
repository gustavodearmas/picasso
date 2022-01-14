import React from "react";

const IconKeyValue = ({ icon, key_, value_ }) => {
  return (
    <div className="flex text-xs items-center mt-1 h-6">
      <div className="w-2/24">
        <i className={`text-sm text-gray-600 ${icon}`}></i>
      </div>
      <div className="w-10/24">
        <span className="ml-2">{key_}</span>
      </div>
      <div className="flex justify-start w-12/24 border border-gray-200 rounded">
        <span className="px-2 py-1">{value_}</span>
      </div>
    </div>
  );
};

export default IconKeyValue;
