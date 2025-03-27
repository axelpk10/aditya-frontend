import { Link } from "react-router-dom";
import image from "../assets/image1.jpg";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    username: "",
    password: "",
    confirmPassword: "",
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 items-center">
                Register
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="">
                <p className="font-semibold">Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="font-semibold">Email</p>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <p className="font-semibold">Department</p>

                  <div className="relative w-full">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full text-[12px] font-medium px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Department</option>
                      <option value="sales">Sales</option>
                      <option value="marketing">Marketing</option>
                      <option value="it">IT</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-500"
                      size={20}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="font-semibold">Role</p>
                  <div className="relative w-full">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full text-[12px] font-medium px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Role</option>
                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                      <option value="admin">Admin</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-500"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold">Username</p>
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
                <p className="font-semibold">Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <p className="font-semibold">Confirm Password</p>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-center font-bold">
                <button
                  type="submit"
                  className="w-1/2 text-2xl bg-[#38364B] text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Register
                </button>
              </div>

              <div className="text-center mt-4">
                <span className="text-gray-600">Already have an account? </span>
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
