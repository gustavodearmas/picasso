import React from "react";

const KeyValue = ({ icon, key_, value_ }) => {
  return (
    <div className="flex text-sm items-center mb-1">
      <div className="flex-col bg-gray-100 w-full xl:w-11/12 p-1 rounded ">
        <span className="flex font-bold">{key_}{": \u00A0"}</span>
        <span className="flex">{value_}</span>
      </div>
    </div>
  );
};

export default KeyValue;
