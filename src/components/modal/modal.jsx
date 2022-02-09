import React from "react";

const Modal = ({children, cssadd}) => {
  return (
    <div className="h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className={`w-auto max-w-3xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ${cssadd}`}> {/* w-full */}
         {children}
      </div>
    </div>
  );
};

export default Modal;
