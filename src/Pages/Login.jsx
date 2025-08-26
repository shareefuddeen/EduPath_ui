import React from "react";
import LoginImage from "../Images/woman-holding-diploma-smiling.webp";
import GoogleIcon from "../Icons/google-brands.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../Images/5920-removebg-preview.webp"
import GoogleLoginButton from "../Components/GoogleLoginButton"

import axios from "axios";

const Login = () => {
  const api_url = import.meta.env.VITE_API_URL
  const navigate = useNavigate();

  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const login = async () => {
    try {
      const response = await axios.post(
        `${api_url}/api/login/`,
        formData,
        { headers },
      );
      const { access, refresh } = response.data;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      navigate("/");
    } catch (error) {
      console.log(error);
      setIsloading(false)
      alert("invalid credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    login();
  };
  return (
    <section className="h-screen bg-gray-200 flex justify-center items-center">
     { isLoading?(
          <img src={logo} className="w-12 h-12 animate-upDown mx-auto mt-[6em] flex justify-center items-center"/>
      ):(
        <div className="bg-white/50 w-[50em] h-[36em] overflow-hidden flex rounded-md">
        <img
          loading="lazy"
          src={LoginImage}
          className="object-cover w-1/2 hover:scale-105 transition duration-300"
          alt="Register Image"
        />
        <form method="post" className="w-full h-full p-6 flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-4xl bg-gradient-to-tl from-purple-200 to-purple-900 bg-clip-text text-transparent text-center font-semi-bold uppercase">
              Login
            </h1>
          </div>
          <div className="w-full flex flex-col">
            <label
              className="w-full text-md text-purple-700"
              htmlFor="username"
            >
              username:
            </label>
            <input
              className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              className="w-full text-md text-purple-700"
              htmlFor="password"
            >
              password:
            </label>
            <input
              className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <button className="w-full bg-purple-700 py-2 rounded-md text-white hover:bg-purple-600 text-lg">
              Login
            </button>
          </div>
           <div className="mt-2">
             <Link
              className="text-blue-600 hover:underline transition duration-300"
              to="/reset-password"
            >
              reset password
            </Link>
          </div>
          <div className="flex gap-2">
            <p>Don't have account?</p>
            <Link
              className="text-blue-600 hover:underline transition duration-300"
              to="/register"
            >
              Register
            </Link>
          </div>
          <div>
            <p className="text-center">or</p>
          </div>
          <GoogleLoginButton />
        </form>
      </div>
      )}
    </section>
  );
};

export default Login;
