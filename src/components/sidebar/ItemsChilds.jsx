import React from "react";

const ItemsChilds = ({icon, title, link}) => {
  return (
    <li className="">
      <div className="relative flex justify-between text-gray-500 hover:text-white focus-within:text-white">
        <div className="flex items-center w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M18 9.25H13.75V5"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.75 15.25H14.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.75 12.25H14.25"
              ></path>
            </svg>
          </div>
          <a
            href={link}
            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-parotia-2 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-parotia-2"
          >
            {title}
          </a>
        </div>
        <button
          className="absolute right-0 flex items-center p-1"
          tabindex="-1"
        >
          <svg
            className="w-5 h-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </button>
      </div>
      <div className="pt-2 pl-4">
        <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
         <Children title="titulo 1" link="#"/>
         <Children title="titulo 1" link="#"/>
         <Children title="titulo 1" link="#"/>
         <Children title="titulo 1" link="#"/>
         <Children title="titulo 1" link="#"/>
         </ul>
      </div>
    </li>
  );
};

const Children = ({title, link}) =>{
    return(
        <li>
            <a
              href={link}
              className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-parotia-2 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
            >
              {title}
            </a>
          </li>
          
    );
}

export default ItemsChilds;
