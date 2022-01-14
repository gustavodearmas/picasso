import React from "react";

const Input = ({name, label, type, defaultValue, disabled}) => {
  return (
    <div className="flex items-center my-1">
      <label className="block text-gray-600 font-semibold text-xs font-bold mr-2 w-7/12">
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className="bg-white px-2 py-1 outline-none rounded-md w-full text-xs w-5/12"
      />
    </div>
  );
};

export default Input;
