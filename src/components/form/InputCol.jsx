import React from "react";

const InputCol = ({ name, label, type, defaultValue, disabled, required }) => {
  return (
    <div className="flex flex-col items-left py-2 text-sm">
      <label className="block text-gray-600 font-bold mr-2 w-7/12 pb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        disabled={disabled}
        className="bg-white px-2 py-1 outline-none rounded-md w-full h-8"
      />
    </div>
  );
};

export default InputCol;
