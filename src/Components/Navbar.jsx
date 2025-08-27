import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/5920-removebg-preview.webp"

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const navigate = useNavigate()
  const isAuthenticated = !!localStorage.getItem("access")

  const handleClick =()=>{
    setIsOpen(!isOpen)
  }
  const logout = () => {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    navigate("/login")
  }
  return (



    <div className="flex sticky top-0 h-24 justify-between items-center z-[999] relative">
      <div className="h-full w-full absolute bg-white/10 backdrop-blur-lg "></div>
      <div className="absolute gap-[11.6em] w-full text-black rounded-md mt-2 bg-transparent p-4 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img className="w-12 h-12" src={logo} alt="Logo" />
          <h1 className="text-xl">EduPath</h1>
        </div>
        <div>
            <button className="block lg:hidden" onClick={handleClick}>{isOpen?(<sapn className="text-white z-20 text-2xl absolute right-4">X</sapn>):(<svg xmlns="http://www.w3.org/2000/svg" className="" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
        <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
      </svg>)}</button>

          <ul className={`flex ${isOpen?"block":"hidden"} z-10 flex-col h-auto lg:block lg:flex-row lg:flex absolute w-[100%] left-0 lg:w-full lg:relative lg:bg-transparent lg:top-0 top-6 bg-black text-white lg:lg:text-black p-4 lg:p-2 gap-16 px-6`}>
            <li>
              <Link id="style-2" data-replace="Home" className="a text-lg " to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link id="style-2" data-replace="Institutions" className="a text-lg " to="/program">
                <span>Institutions</span>
              </Link>
            </li>
            <li>
              <Link id="style-2" data-replace="Careers" className="a text-lg " to="/careers">
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link id="style-2" data-replace="Courses" className="a text-lg " to="/program">
                <span>Courses</span>
              </Link>
            </li>
            {
              isAuthenticated ? (<li>
                <button className="text-lg" onClick={() => { logout() }}>
                  <span>Log out</span>
                </button>
              </li>) : (<li>
                <Link id="style-2" data-replace="Sign in" className="a text-lg " to="/login">
                  <span>Sign in</span>
                </Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
