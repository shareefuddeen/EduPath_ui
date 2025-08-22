import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../Images/5920-removebg-preview.webp"

const Navbar = () => {

  const navigate = useNavigate()
  const isAuthenticated = !!localStorage.getItem("access")

  const logout =()=>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    navigate("/login")
  }
  return (
    <div className="flex sticky top-0 h-24 justify-center items-center z-[999] relative">
    <div className="h-full w-full absolute bg-white/10 backdrop-blur-lg "></div>
      <div className="absolute gap-[11.6em] mx-auto w-full text-black rounded-md mt-2 bg-transparent p-4 flex justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <img className="w-12 h-12" src={logo} alt="Logo" />
          <h1 className="text-xl">EduPath</h1>
        </div>
        <div>
          <ul className="flex gap-16 px-6">
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
              isAuthenticated?(<li>
              <button className="text-lg" onClick={()=>{logout()}}>
                <span>Log out</span>
              </button>
            </li>):(<li>
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
