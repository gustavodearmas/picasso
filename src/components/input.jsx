import React from "react";

const Input = ({name, label, type, defaultValue, disabled}) => {
  return (
    <div>
      <label className="block mb-1 text-gray-600 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className="bg-white px-4 py-2 outline-none rounded-md w-full"
      />
    </div>
  );
};

export default Input;
