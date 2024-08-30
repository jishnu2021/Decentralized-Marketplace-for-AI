import React from "react";
import logo from "../images/Logo.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { WalletContext } from "./WalletContext";
import { useContext } from "react";

const Navbar = () => {
  const { walletAddress } = useContext(WalletContext);
  const navigate = useNavigate();
  const location = useLocation(); // To get the current location path

  const auth = 0;

  const displayAddress = walletAddress
    ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
        walletAddress.length - 6
      )}`
    : "";

  const buttonchange = () => {
    localStorage.clear();
    navigate("/signup");
  };

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AI MART
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {auth === 1 ? (
              <button
                onClick={() => navigate("/signup")}
                style={{ width: "120px", padding: "0.5rem" }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white rounded-full">
                    {/* Display user initial or avatar */}
                  </div>
                </button>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    {/* Display user name and email */}
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/setting"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="wallet"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        {walletAddress
                          ? `Wallet: ${displayAddress}`
                          : "Connect your wallet"}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={buttonchange}
                        href="/signup"
                        style={{
                          width: "120px",
                          padding: "0.5rem",
                          marginLeft: "10px",
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              style={{ fontSize: "18px" }}
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <a
                  href="/about"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive("/about")
                      ? "text-white bg-blue-700 md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive("/pricing")
                      ? "text-white bg-blue-700 md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive("/service")
                      ? "text-white bg-blue-700 md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive("/contact")
                      ? "text-white bg-blue-700 md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
