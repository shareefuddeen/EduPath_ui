import React from "react";
import registerImage from "../Images/graduate-holding-diploma-celebrating-graduation.webp";
import GoogleIcon from "../Icons/google-brands.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const api_url = import.meta.env.VITE_API_URL
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...formData,
            [name]: value,
        }));
    };

    const Register = async () => {
        const headers = {
            "Content-Type": "application/json",
        };

        try {
            const response = await axios.post(
               `${api_url}/api/register/`,
                formData,
                {
                    headers,
                },
            );

            const { access, refresh } = response.data;
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);
            alert("user created successfully!");
            navigate("/");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                alert("Invalid credentials!");
            } else {
                console.log(error.message);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        Register();
    };

    return (
        <section className="h-screen bg-gray-200 flex justify-center items-center">
            {
                isLoading ? (
                    <div className="h-screen flex justify-center items-center">
					<p className="text-purple-600 text-6xl font-mono font-bold animate-upDown">
						Edu-Path
					</p>
				</div>
                ): (
                    <div className = "bg-white/50 w-[50em] h-[36em] overflow-hidden flex rounded-md">
                <img
                    src = { registerImage }
                    className = "object-cover w-1/2 hover:scale-105 transition duration-300"
                    alt = "Register Image"
                />
            <form
                method="post"
                className="w-full h-full p-6 flex flex-col gap-2"
                onSubmit={handleSubmit}
            >
                <div>
                    <h1 className="text-4xl bg-gradient-to-tl from-purple-200 to-purple-900 bg-clip-text text-transparent text-center font-semi-bold uppercase">
                        Register
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
                        htmlFor="email"
                    >
                        email:
                    </label>
                    <input
                        className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "
                        type="email"
                        placeholder="email"
                        name="email"
                        value={formData.email}
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
                <div className="w-full flex flex-col">
                    <label
                        className="w-full text-md text-purple-700"
                        htmlFor="confirm password"
                    >
                        confirm password:
                    </label>
                    <input
                        className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "
                        type="password"
                        placeholder="confirm password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-2">
                    <button className="w-full bg-purple-700 py-2 rounded-md text-white hover:bg-purple-600 text-lg">
                        Register
                    </button>
                </div>
                <div className="flex gap-2">
                    <p>already have an account?</p>
                    <Link
                        className="text-blue-600 hover:underline transition duration-300"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
                <div>
                    <p className="text-center">or</p>
                </div>
                <div className="bg-white p-2 rounded-full">
                    <a
                        className="flex justify-center items-center gap-4"
                        href="#"
                    >
                        <img
                            className="w-6 h-6"
                            src={GoogleIcon}
                            alt="Google logo"
                        />
                        Log in with Google
                    </a>
                </div>
            </form>
        </div>
    )
}
           
        </section >
    );
};

export default Register;
