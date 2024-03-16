import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/img_logo01.png"
import Button from "../Button/Button";
import "./style.css"
import { useState } from "react";
import { cn } from "../../utils/utils";
const Navigation = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const handleClick = () => {
    setIsDropdownActive(!isDropdownActive);
  }
  return <header className="py-[12px] px-[24px] border-[1px] rounded-[48px] border-gray-500 flex justify-between">
    <NavLink to="/">
      <figure className="aspect-[163/52] w-full h-auto max-w-[163px]"><img src={Logo} className="w-full h-full object-contain" alt="" /></figure>
    </NavLink>
    <nav className="flex items-center navigation">
      <ul className="flex items-center justify-center gap-[24px]">
        <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={"/"}>Home</NavLink></li>
        <li className="relative text-black text-[16px] font-[500] transition ease-out hover:text-green-800">
          <button id="dropdownTakeAction" onClick={handleClick} data-dropdown-toggle="dropdown" className="flex items-center" type="button">
            Take Action
            <svg className="w-2.5 ms-1 mt-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {/* Dropdown menu  */}
          <div id="dropdown" className={cn("dropdown z-10 absolute top-[35px] border border-green-800 bg-white divide-y divide-neutral-500 rounded-lg shadow w-44 overflow-hidden",
            { "hidden": !isDropdownActive })}>
            <ul className=" text-sm text-green-800" aria-labelledby="dropdownTakeAction">
              <li>
                <NavLink to="/a" className="block px-4 py-2 hover:bg-neur500 divide-neutral-500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/a" className="block px-4 py-2 hover:bg-neur500 divide-neutral-500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/a" className="block px-4 py-2 hover:bg-neur500 divide-neutral-500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/a" className="block px-4 py-2 hover:bg-neur500 divide-neutral-500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800" ><NavLink to={"/about"}>About Us</NavLink></li>
        <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={"/contact"}>Contact Us</NavLink></li>
        <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={"/news_and_blogs"}>News & Blogs</NavLink></li>
      </ul>
    </nav>
    <div className="flex gap-2 items-center">
      <Button buttonType="secondary">Sign in</Button>
      <Button buttonType="secondary--green">Sign in</Button>
    </div>
  </header>;
};

export default Navigation;
