import React from "react";

const IconKeyValue2x1 = ({ icon, key_, value_, value_2, value_3 }) => {
  return (
    <div className="flex text-xs mt-1">
      <div className="w-2/24">
        <i className={`text-sm text-gray-600 ${icon}`}></i>
      </div>
      <div className="w-10/24">
        <span className="ml-2">{key_}</span>
      </div>
      <div className="w-12/24">
        <div className="flex flex-col justify-start border border-gray-200 rounded">
          <span className="px-2 pt-1">{value_} {value_2}</span>
          <span className="px-2 pb-1">{value_3}</span>
        </div>
      
        
      </div>
    </div>
  );
};

export default IconKeyValue2x1;
