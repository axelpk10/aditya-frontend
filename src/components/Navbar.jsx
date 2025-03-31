import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const location = useLocation(); // Get current URL path
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menus = [
    {
      name: "Orders",
      links: ["/orders", "/track-order", "/order-history"],
      labels: ["View Orders", "Track Order", "Order History"],
    },
    {
      name: "Reports",
      links: ["/sales-report", "/inventory-report", "/customer-insights"],
      labels: ["Sales Report", "Inventory Report", "Customer Insights"],
    },
    {
      name: "Quotation",
      links: ["/new-quotation", "/pending-quotations", "/approved-quotations"],
      labels: ["New Quotation", "Pending Quotations", "Approved Quotations"],
    },
    {
      name: "To Invoice",
      links: ["/unpaid-invoices", "/paid-invoices", "/invoice-history"],
      labels: ["Unpaid Invoices", "Paid Invoices", "Invoice History"],
    },
  ];

  return (
    <nav className="w-full bg-gray-200 p-2">
      <ul className="flex space-x-2 justify-center">
        <li>
          <Link
            to="/dashboard"
            className={`px-4 py-2 border border-gray-400 rounded-lg ${
              location.pathname === "/dashboard"
                ? "text-blue-500 bg-white"
                : " hover:bg-gray-100 bg-white"
            } flex items-center justify-between`}
          >
            Dashboard
          </Link>
        </li>

        {menus.map((menu) => {
          const isActive = menu.links.includes(location.pathname); 

          return (
            <li key={menu.name} className="relative">
              <button
                className={`px-4 py-2 border border-gray-400 rounded-lg ${
                  isActive
                    ? "text-blue-500 bg-white"
                    : " hover:bg-gray-100 bg-white"
                } flex items-center justify-between w-auto`}
                onClick={() => toggleDropdown(menu.name)}
              >
                {menu.name}
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    openDropdown === menu.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === menu.name && (
                <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  {menu.labels.map((label, index) => (
                    <li key={menu.links[index]}>
                      <Link
                        to={menu.links[index]}
                        className={`block px-4 py-2 hover:bg-gray-100 bg-white ${
                          location.pathname === menu.links[index]
                            ? "text-blue-500 bg-white"
                            : "text-black"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
