import React from "react";
import { Link,useNavigate } from "react-router-dom";

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
      <div className="absolute z mx-auto w-2/3 text-black rounded-md mt-2 bg-transparent p-4 flex justify-between">
        <div>
          <img src="" alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-16 px-6">
            <li>
              <Link className="text-lg " to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg " to="/">
                Schools
              </Link>
            </li>
            <li>
              <Link className="text-lg " to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="text-lg " to="/program">
                Courses
              </Link>
            </li>
            {
              isAuthenticated?(<li>
              <button className="text-lg" onClick={()=>{logout()}}>
                Log out
              </button>
            </li>):(<li>
              <Link className="text-lg " to="/login">
                Sign in
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
