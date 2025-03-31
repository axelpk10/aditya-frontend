import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import chart1 from "../assets/chart1.jpg";
import chart2 from "../assets/chart2.jpg";
import chart3 from "../assets/chart3.jpg";
import chart4 from "../assets/chart4.jpg";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="p-6 bg-white">
        {/* Centered Page Title */}
        <div className="flex justify-center">
          <h1 className="text-2xl font-semibold text-blue-500 mb-6">
            Dashboard
          </h1>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Monthly Sales Chart */}
          <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
            <h2 className="text-lg font-medium text-blue-500 p-4 text-center">
              Monthly Sales
            </h2>
            <div className="bg-gray-100 p-4 flex justify-center">
              <img
                src={chart1}
                alt="Monthly Sales Chart"
                className="w-[90%] h-[450px] object-contain"
              />
            </div>
          </div>

          {/* Stock Prices Chart */}
          <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
            <h2 className="text-lg font-medium text-blue-500 p-4 text-center">
              Stock Prices
            </h2>
            <div className="bg-gray-100 p-4 flex justify-center">
              <img
                src={chart2}
                alt="Stock Prices Chart"
                className="w-[90%] h-[450px] object-contain"
              />
            </div>
          </div>

          {/* Production vs Demand Chart */}
          <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
            <h2 className="text-lg font-medium text-blue-500 p-4 text-center">
              Production vs Demand
            </h2>
            <div className="bg-gray-100 p-4 flex justify-center">
              <img
                src={chart3}
                alt="Production vs Demand Chart"
                className="w-[90%] h-[450px] object-contain"
              />
            </div>
          </div>

          {/* Inventory Chart */}
          <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
            <h2 className="text-lg font-medium text-blue-500 p-4 text-center">
              Inventory
            </h2>
            <div className="bg-gray-100 p-4 flex justify-center">
              <img
                src={chart4}
                alt="Inventory Chart"
                className="w-[90%] h-[450px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* KPI Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Total Orders */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm w-full">
            <h3 className="text-blue-500 font-extrabold text-2xl mb-2 text-center">
              Total Orders
            </h3>
            <p className="text-2xl font-bold text-center mt-2">20</p>
          </div>

          {/* Total Sales */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm items-center">
            <h3 className="text-blue-500 font-extrabold text-2xl mb-2 text-center">
              Total Sales
            </h3>
            <p className="text-2xl font-bold text-center mt-2">$325,000,000</p>
          </div>

          {/* Order Progress */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h3 className="text-blue-500 font-extrabold text-2xl mb-2 text-center">
              Order Progress
            </h3>
            <div className="flex justify-around items-center mt-2">
              <div>
                <p className="font-bold text-lg">Completed</p>
                <p className="font-bold text-lg">Pending</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">10</p>
                <p className="font-bold text-lg">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
