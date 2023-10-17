import React from "react";
import { GoLaw } from "react-icons/go";
const Navbar = () => {
  return (
    <>
      <div className="w-full  rtl bg-[#192655] flex items-center p-5  shadow shadow-2xl text-white">
        <GoLaw size={50} className="mr-32  flex items-center " />
        <div className="text-4xl mr-5 w-full  font-bold flex items-center font-Vazirmatn">
          محاسبه دیه
        </div>
      </div>
      <div className="w-full rtl ">
        <div className="bg-[#D6E4E5] absolute w-20 h-20 rotate-45 mr-32"></div>
        
      </div>
    </>
  );
};

export default Navbar;
