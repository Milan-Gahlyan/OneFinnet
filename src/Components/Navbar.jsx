// src/components/Navbar.jsx
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-4 lg:mx-11 p-6">
      <div className="text-2xl">
        <span className="font-normal">GO </span>
        <span className="font-bold">FOOD</span>
      </div>

      <div className="flex items-center space-x-8 lg:space-x-16">
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
          <span>Home</span>
          <span><IoIosArrowDown /></span> 
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
        <span>Grocery</span>
        <span><IoIosArrowDown /></span>        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
        <span>Pages</span>
        <span><IoIosArrowDown /></span>        </a>
      </div>
        <div className="flex items-center space-x-6 lg:space-x-12">
          <button className="flex items-center space-x-2 text-grey hover:text-gray-800">
            <span>Connect with us</span>
            <span><BsArrowRightShort />
            </span>
          </button>
          <div className="flex items-center space-x-2 lg:space-x-6">
  <span className="text-grey hover:text-black bg-white bg-opacity-30 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"><CiSearch /></span>
  <span className="text-grey hover:text-black bg-white bg-opacity-30 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"><CiUser /></span>
  <span className="text-grey hover:text-black bg-white bg-opacity-30 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"><CiHeart /></span>
  <span className="text-grey hover:text-black bg-white bg-opacity-30 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"><CiShoppingCart /></span>
</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
