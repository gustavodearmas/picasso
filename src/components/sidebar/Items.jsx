import React from "react";

const Items = ({icon, title, link}) => {
  return (
    <li className="relative text-gray-500 hover:text-white focus-within:text-white">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.75 8.75V19"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5 8.25H19"
          ></path>
        </svg>
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
