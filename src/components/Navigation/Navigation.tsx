import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/img_logo01.png"
import Button from "../button/Button";
import "./style.css"
import { useState } from "react";
import { cn } from "../../utils/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, userType } from "../../store/userSlice";
import Auth from "../../api/auth";
import { CgProfile } from "react-icons/cg";

const userNav = {
  "member":[
    {
      name:"Home",
      nav:"/"
    },
    {
      name:"Order",
      nav:"/order"
    }
  ],
  "partner":[
    {
      name:"Home",
      nav:"/"
    },
    {
      name:"Meals",
      nav:"/meals"
    },
  ],
  "donor":[{
    name:"Home",
    nav:"/"
  }],
  "caregiver":[{
    name:"Home",
    nav:"/"
  },
  {
    name:"Order",
    nav:"/order"
  }],
  "volunteer":[{
    name:"Home",
    nav:"/"
  }],
  "admin":[
    {
      name:"Home",
      nav:"/"
    },
    {
      name:"Meals",
      nav:"/meals"
    }
  ],
}

const Navigation = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [isSlidebarActive, setIsSlidebarActive] = useState(false)
  const dispatch = useDispatch();
  const {type, token}:{type:userType, token:string|null} = useSelector((state: RootState) => state.user);
  const nav = useNavigate();
  
  const handleProfile = ()=>{
    nav("/profile");
  }
  const handleClick = () => {
    setIsDropdownActive(!isDropdownActive);
  }
  const navigateToSignIn = () => {
    nav("/login")
  }
  const navigateToSignUp = () => {
    nav("/user")
  }
  const handleLogout = async()=>{
    if(token){
      console.log(token);
      const response = await Auth.logout(token);
      console.log(response);
      dispatch(clearUser());
      nav("/");
    }
  }
  const handleToggleSlidebar = ()=>{
    setIsSlidebarActive(!isSlidebarActive)
  }
  return <header className="py-[12px] px-[24px] border-[1px] rounded-[48px] border-gray-500 flex justify-between">
    <NavLink to="/">
      <figure className="aspect-[163/52] w-full h-auto max-w-[163px]"><img src={Logo} className="w-full h-full object-contain" alt="" /></figure>
    </NavLink>
    <nav className="flex items-center navigation">
      {/* dyanmic nav */}
      {!type?
        <ul className=" hidden nav:flex items-center justify-center gap-[24px]">
          <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={"/"}>Home</NavLink></li>
          {/* <li className="relative text-black text-[16px] font-[500] transition ease-out hover:text-green-800">
            <button id="dropdownTakeAction" onClick={handleClick} data-dropdown-toggle="dropdown" className="flex items-center" type="button">
              Take Action
              <svg className="w-2.5 ms-1 mt-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
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
          </li> */}
          <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800" ><NavLink to={"/about"}>About Us</NavLink></li>
          <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={"/contact"}>Contact Us</NavLink></li>
          {/* <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={"/news_and_blogs"}>News & Blogs</NavLink></li> */}
        </ul>:
        <ul className=" hidden nav:flex items-center justify-center gap-[24px]">
          {userNav[type].map((nav,index)=><li key={index} className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink to={nav.nav}>{nav.name}</NavLink></li>)}
        </ul>
      }
    </nav>
    {/* dyanmic button*/}
    {
      !type?
      <div className="hidden nav:flex gap-2 items-center">
        <Button handleClick={navigateToSignIn} buttonType="secondary">Sign in</Button>
        <Button handleClick={navigateToSignUp} className="" buttonType="secondary--green">Sign up</Button>
      </div>:
      <div className="hidden nav:flex gap-3 items-center">
        <Button handleClick={handleLogout} className="" buttonType="secondary--green">Sign out</Button>
        <button onClick={handleProfile}><CgProfile className="text-3xl text-green-800"/></button>
      </div>
    }
    <div className="flex nav:hidden items-center">
      <button onClick={handleToggleSlidebar}><GiHamburgerMenu className="text-2xl text-green-800" /></button>
    </div>
    <div className={cn("bg-white z-20 flex flex-col p-14 nav:hidden fixed shadow-lg top-0 bottom-0 left-0 right-0 translate-x-full ease-out duration-700 m-auto transition-all",{"translate-x-0":isSlidebarActive})}>
      <div className="flex nav:hidden items-center ms-auto">
        <button onClick={handleToggleSlidebar}><RxCross1 className="text-4xl text-green-800" /></button>
      </div>
      <nav className="flex items-center navigation">
        {
          !type?
            <ul className="flex flex-col text-start justify-center w-full">
              <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink className={"block mt-4 px-4 py-4 hover:bg-green-800 hover:text-white"} to={"/"}>Home</NavLink></li>
              {/* <li className="relative text-black text-[16px] font-[500] transition ease-out hover:text-green-800">
                <button id="dropdownTakeAction" onClick={handleClick} data-dropdown-toggle="dropdown" className="flex items-center w-full px-4 py-4 hover:bg-green-800 hover:text-white" type="button">
                  Take Action
                  <svg className="w-2.5 mt-1 ms-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdown" className={cn("dropdown z-10 bg-white border-none w-full overflow-hidden",
                  { "hidden": !isDropdownActive })}>
                  <ul className=" text-sm text-green-800" aria-labelledby="dropdownTakeAction">
                    <li>
                      <NavLink to="/a" className="block px-4 py-4 hover:bg-neur500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/a" className="block px-4 py-4 hover:bg-neur500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/a" className="block px-4 py-4 hover:bg-neur500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/a" className="block px-4 py-4 hover:bg-neur500 hover:bg-green-800 hover:text-white transition ease-out duration-400">Dashboard</NavLink>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800" ><NavLink className="block mt-4 px-4 py-4 hover:bg-green-800 hover:text-white" to={"/about"}>About Us</NavLink></li>
              <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink className="block mt-4 px-4 py-4 hover:bg-green-800 hover:text-white" to={"/contact"}>Contact Us</NavLink></li>
              {/* <li className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800"><NavLink className="block mt-4 px-4 py-4 hover:bg-green-800 hover:text-white" to={"/news_and_blogs"}>News & Blogs</NavLink></li> */}
            </ul>
          :
          <ul className="flex flex-col text-start justify-center w-full">
            {userNav[type].map((nav,index)=>
              <li key={index} className="text-black text-[16px] font-[500] transition ease-out hover:text-green-800">
                <NavLink className={"block mt-4 px-4 py-4 hover:bg-green-800 hover:text-white"} to={nav.nav}>{nav.name}</NavLink>
              </li>
            )}
          </ul>
        
        }
        
      </nav>

      {
        !type?
        <div className="gap-2 items-center mt-10">
          <Button handleClick={navigateToSignIn} className="hover:scale-100 hover:shadow-lg rounded-none mb-5" buttonType="secondary">Sign in</Button>
          <Button handleClick={navigateToSignUp} className="hover:scale-100 hover:shadow-lg rounded-none" buttonType="secondary--green">Sign up</Button>
        </div>:
        <div className="items-center mt-10">
          <Button handleClick={handleLogout} className="hover:scale-100 hover:shadow-lg rounded-none mb-5" buttonType="secondary--green">Sign out</Button>
        </div>
      }
    </div>
  </header>;
};

export default Navigation;


