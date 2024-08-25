  import React from "react";
  import { AlignLeft } from "lucide-react";
  import { Search } from "lucide-react";
  import logo from '/logo.svg';


  function Navbar() {
    return (
      <nav
        className="flex justify-between px-8 py-1"
        style={{ backgroundColor: "#f8f7f4" }}
      >
        <div className="flex items-center w-auto">
          <ul className="flex gap-8 justify-between ml-5 text-black font-customFont-medium text-[15px] font-medium">
          
            <li className="cursor-pointer">Find designers
            <select
                className="bg-transparent"
                name="Find Designers"
                id=""
              ></select>
              </li>
            
            <li className="cursor-pointer">Inspiration</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="cursor-pointer">Go Pro</li>
            
          </ul>
        </div>
        <div className="cursor-pointer">
          <img src="logo.svg" alt="logo" className="w-20 h-20"/>
        </div>
        <div className="flex items-center justify-evenly w-[34%] text-black font-customFont-medium text-[14px] font-medium">
          <form className="flex relative items-center ">
            <input
              className="h-12 pr-6 pl-12 rounded-3xl font-customFont-light text-[14px] border-none"
              type="text"
              placeholder="Search..."
            />
            <Search className="absolute ml-2" color="#6e6d7a" size={20} />
          </form>
          <button className="border-none mx-3 text-[15px] hover:text-slate-700">
            Log in
          </button>
          <button className="bg-[#0d0c22] text-white px-6 h-12 rounded-3xl hover:bg-slate-700">
            Sign up
          </button>
        </div>
      </nav>
    );
  }

  export default Navbar;
