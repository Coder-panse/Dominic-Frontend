import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// import { userData } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()

  return (
      <nav className=" z-10 py-8 px-[8%] bg-[#F8F1E7]">
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-3xl">Logo</p>
          </div>

          <div className="font-medium hidden md:block">
            <ul className="flex gap-16 text-lg text-gray-700 ">
              <li>
                <NavLink to="/">Home</NavLink>

                {/*  className={({isActive})=>isActive? `text-orange-500`:""}  inside navlink */}
              </li>
              <li>
                <NavLink to="/">Work</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <li>
                <NavLink to="/"></NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 sm:gap-8 items-center">
            <div>
              <button className="px-8 py-3 rounded-full bg-[#B92E1D] text-white font-medium text-lg" onClick={()=>navigate("/login")}>
                Login
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <RiMenu3Fill className="md:hidden text-[25px] text-black" />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: isOpen ? 0 : "100%" }} // Slide in when open, slide out when closed
          transition={{ stiffness: 100, damping: 15 }} //type:"spring", before stiffness
          className="fixed top-0 right-0 h-full w-full bg-[#B92E1D] text-white z-20 text-lg py-10 shadow-lg md:hidden"
        >
          <div className="w-full flex justify-end pr-10 sm:pr-20">
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoCloseSharp className="  md:hidden text-[25px]" />
            </button>
          </div>

          <div className="flex flex-col items-center mt-10">
            <ul className="space-y-6">
              <li className="cursor-pointer hover:text-gray-300">
                <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-gray-300">
                <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
                  Work
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-gray-300">
                <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
   
  );
};

export default Navbar;
