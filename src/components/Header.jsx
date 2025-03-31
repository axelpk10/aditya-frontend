import React from "react";
import { Bell, User, ChevronDown } from "lucide-react";
import icon1 from "../assets/icon-header1.jpg";
import icon2 from "../assets/icon-header2.jpg";

const Header = () => {
  return (
    <header className="flex items-center w-full bg-[#38364b] text-white w">
      {/* ERP Section */}
      <div className="flex items-center bg-[#29a5e0] py-3 px-4 ">
        <img src={icon1} alt="ERP icon" className="mr-2 h-12 aspect-square" />
        <span className="text-xl font-bold">ERP</span>
      </div>

      {/* Sales & Orders Section */}
      <div className="flex items-center bg-[#38364b] py-3 px-4 flex-grow">
        <img
          src={icon2}
          alt="Sales chart icon"
          className="mr-2 h-12 aspect-square"
        />
        <span className="text-xl font-bold">Sales & Orders</span>
      </div>

      {/* Right side icons */}
      <div className="flex items-center pr-4">
        <Bell className="mx-2 h-8 w-8" />
        <div className="flex items-center mx-2">
          <User className="h-8 w-8 bg-gray-600 rounded-full p-1" />
          <ChevronDown className="h-4 w-4 ml-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
