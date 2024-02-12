import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from "react-dom"


function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur">
        <div className="min-h-[200px] max-w-[80%] bg-white relative z-50 p-4 m-auto min-w-[80vw]">
          <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="self-end text-2xl hover:cursor-pointer hover:bg-slate-500 rounded-full p-1" />
          </div>
            {children}
        </div>
        
        </div>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;
