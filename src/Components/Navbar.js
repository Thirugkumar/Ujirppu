import React from "react";
import logo from "../assets/logo.webp";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = (props) => {
  return (
    <>
      {" "}
      <React.Fragment>
        <section className=" bg-mainColor dark:bg-gray-900  shadow-gray-300 dark:shadow-gray-700  shadow-lg w-full fixed z-50 border-b-2 border-white">
          <div className="flex w-5/6 mx-auto h-20 items-center justify-between md:w-[99%] lg:w-11/12 xl:max-w-screen-2xl">
            <div>
              <a href="/" className="logo">
                <img
                  src={logo}
                  alt="UJIRPPU"
                  className=" h-14 w-full flex-none"
                />
              </a>
            </div>
            <form className="">
              <div className="grow relative hidden lg:block ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none  ">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-100 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-96 p-4 ps-10 text-sm text-gray-900 border-none rounded-lg bg-orange-100 dark:bg-gray-600 dark:text-gray-100 "
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className=" text-gray-800 absolute end-2.5 bottom-2 bg-orange-300 hover:bg-orange-400 font-medium rounded-lg text-sm px-2 py-2 dark:text-gray-100"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="flex items-center">
              <a href="/" className="">
                <svg
                  className="w-6 h-6 text-white dark:hover:text-orange-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              </a>
              <div className="">
                <div
                  className=" text-2xl m-8 p-2 text-white dark:text-gray-100 hover:text-gray-100 bg-gray-500  hover:bg-gray-800 rounded-2xl cursor-pointer hover:dark:bg-gray-800"
                  onClick={() => {
                    props.handleThemeToggle();
                  }}
                >
                  {props.currentTheme === "dark" ? <FaSun /> : <FaMoon />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>{" "}
    </>
  );
};
