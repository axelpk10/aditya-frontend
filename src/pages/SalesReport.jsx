import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Upload } from "lucide-react";
import chart1 from "../assets/chart1.jpg";

const SalesReport = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="p-6 bg-white">
        <h1 className="text-2xl font-bold mb-6">Sales Report</h1>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Sales Chart 1 */}
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

          {/* Monthly Sales Chart 2 */}
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
        </div>

        {/* Upload Reports Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            Upload Reports
            <Upload className="ml-2 h-5 w-5" />
          </h2>

          <div className="space-y-4">
            {/* Report Files */}
            <div className="bg-gray-200 p-4 rounded">
              <a href="#" className="text-blue-500 hover:underline">
                January_sales.pdf
              </a>
            </div>

            <div className="bg-gray-200 p-4 rounded">
              <a href="#" className="text-blue-500 hover:underline">
                February_sales.pdf
              </a>
            </div>

            <div className="bg-gray-200 p-4 rounded">
              <a href="#" className="text-blue-500 hover:underline">
                March_sales.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesReport;
