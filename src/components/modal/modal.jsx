import React from "react";
import ButtonBorder from "../../components/buttoms/buttonBorder";

const Modal = ({ children, cssadd, onClick }) => {
  return (
    <div className="animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div
        className={`p-5 w-11/12 h-20/24 relative mx-auto my-auto rounded-xl shadow-lg bg-white ${cssadd}`}
      >
        <div className="static flex justify-end mb-3">
          <ButtonBorder
            onclick={() => {
              onClick(false);
            }}
            icon="fal fa-times-circle"
            cssAdd={"absolute top-2 right-2"}
          />
        </div>
        <div className="bg-gray-100 p-5 rounded-md h-full overflow-y-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
