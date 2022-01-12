import React from "react";

const Items = ({icon, title, link}) => {
  return (
    <li className="relative text-gray-500 hover:text-white focus-within:text-white">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <i className={icon}></i>
      </div>
      <a
        href={link}
        className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-parotia-2 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-parotia-2"
      >
        {title}
      </a>
    </li>
  );
};

export default Items;
