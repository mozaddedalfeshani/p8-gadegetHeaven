import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx"; // Import the close icon

const Modal = () => {
  return (
    <>
      <div
        className={`${
          modalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}>
        <div
          className={`${
            modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] md:w-[70%] lg:w-[30%] bg-[#ffffff] rounded-lg p-4 transition-all duration-300`}>
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div className="w-full flex items-center justify-center flex-col">
            <h2 className="text-[#2cac9f] text-[2rem] font-[500]">Success!</h2>
            <IoCheckmarkDoneCircleOutline className="p-2 text-[6rem] text-[#2cac9f]" />

            <p className="text-[1.5rem] text-gray-900 text-center mt-4">
              Thank you for <br />
              <span className="font-[600] ">Subscribing</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
