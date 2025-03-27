import React from "react";
import { useState } from "react";
import image from "../assets/image1.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex min-h-screen ">
      <div className="w-1/2 bg-[#EDEDED] relative">
        <img
          src={image}
          alt="Warehouse with packages"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center bg-[#EDEDED] p-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-[10px_5px_10px_rgba(0,0,0,0.3)]">
          <div className="m-4 bg-white text-[16px]">
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 items-center pt-4">
                Sign In
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                {/* <div>

                </div> */}
                <p className="font-semibold relative top-[10px] left-2 bg-white w-fit px-2">
                  Username
                </p>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <p className="font-semibold relative top-[10px] left-2 bg-white w-fit px-2">
                  Password
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-center font-bold">
                <button
                  type="submit"
                  className="w-1/2 text-2xl bg-[#38364B] text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center mt-4">
                <span className="text-gray-600">Don't have an account? </span>
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
