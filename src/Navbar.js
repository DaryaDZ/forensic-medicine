import React from "react";
import { GoLaw } from "react-icons/go";
const Navbar = () => {
  return (
    <>
      <div className="w-full hidden   rtl bg-[#192655] md:flex items-center p-5  shadow shadow-2xl text-white">
        <GoLaw size={50} className="mr-32  flex items-center " />
        <div className="text-4xl mr-5 w-full  font-bold flex items-center font-Vazirmatn">
          محاسبه دیه
        </div>
      </div>
      <div className="w-full rtl md:flex hidden">
        <div className="bg-[#E7E7DE] absolute w-20 h-20 rotate-45 mr-32"></div>
      </div>

{/* mobile screen */}


      <div className="md:hidden flex rtl bg-[#192655] w-full h-12 text-white">
        <GoLaw size={50} className=" p-2 mr-4 flex items-center  " />
        <div className="text-xl mr-2 w-full  font-bold flex items-center font-Vazirmatn">
          محاسبه دیه
        </div>
      </div>
      <div className="w-full rtl md:hidden flex">
        <div className="bg-[#E7E7DE] absolute w-12 h-12 rotate-45 mr-4"></div>
      </div>
    </>
  );
};

export default Navbar;
