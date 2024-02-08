import React from "react";
import { FrontSidebarData } from "./FrontSidebarData";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaYoutube, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FrontSidebar = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const activeLink =
    "hover:bg-gray-200 w-full h-12 flex justify-start items-center text-black text-lg space-x-4 lg:space-x-2 font-bold rounded-xl lg:pl-2 text-mainColor dark:text-mainColor dark:text-gray-100 dark:hover:text-gray-800 lg:dark:hover:bg-gray-400 mx-2 lg:m-0";
  const normalLink =
    "hover:bg-gray-200 w-full h-12 flex justify-start items-center text-black text-lg space-x-4 lg:space-x-2 font-bold rounded-xl lg:pl-2 dark:text-gray-100 dark:hover:text-gray-800 lg:dark:hover:bg-gray-400 mx-2 lg:m-0";

  return (
    <>
      <div className="flex w-[95%] md:w-[98%] lg:w-[30rem] h-full float-left mx-auto dark:bg-darkPostBG rounded-xl overflow-hidden top-24 sticky transform-none lg:mb-4 ">
        <div
          className=" relative lg:float-left w-full bg-gray-300 border-2 border-gray-700 lg:border-none lg:bg-lightPostBG  dark:bg-darkPostBG rounded-xl overflow-hidden"
          data-version="2"
          id="FeaturedPost1"
        >
          <div className="relative float-left w-full p-1">
            <div className="overflow-hidden h-full">
              <React.Fragment>
                <section>
                  <div className="flex flex-nowrap lg:grid-cols-none lg:flex-col mr-2 ">
                    {FrontSidebarData.map((pics, index) => {
                      return (
                        <>
                          <div key={index}>
                            <NavLink
                              to={pics.path}
                              className={
                                category === pics.src ||
                                (category === null && pics.src === "interface")
                                  ? activeLink
                                  : normalLink
                              }
                            >
                              <span>
                                <img
                                  className="w-8 hidden lg:block"
                                  src={require(`../assets/${pics.src}.webp`)}
                                  alt=""
                                />
                              </span>
                              <span>{pics.title}</span>
                            </NavLink>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="mt-3 hidden lg:block">
                    <div className="relative float-left w-full flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold m-0 dark:text-gray-300 text-gray-800">
                        <hr /> Follow Us on Social Media
                      </h3>
                    </div>
                    <div className=" relative float-left w-full p-1">
                      <ul className=" grid grid-cols-2 gap-1 m-0">
                        <li className=" block m-0">
                          <a
                            alt="facebook"
                            className=" relative flex h-8 text-base text-white font-normal items-center rounded-md pl-3  bg-[#00229e]"
                            href="https://www.facebook.com/jegtheme/"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="facebook"
                          >
                            <FaFacebook />
                            &nbsp;Facebook
                          </a>
                        </li>
                        <li className=" block m-0">
                          <a
                            alt="Twitter"
                            className=" relative flex h-8 text-base text-white font-normal items-center rounded-md pl-3  bg-[#17afca]"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="twitter"
                          >
                            <FaTwitter />
                            &nbsp;Twitter
                          </a>
                        </li>
                        <li className=" block m-0">
                          <a
                            alt="whatsapp"
                            className=" relative flex h-8 text-base text-white font-normal items-center rounded-md pl-3  bg-[#00db5f]"
                            href="https://wa.me/+94765406196"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="whatsapp"
                          >
                            <FaWhatsapp />
                            &nbsp;Whatsapp
                          </a>
                        </li>
                        <li className=" block m-0">
                          <a
                            alt="youtube"
                            className=" relative flex h-8 text-base text-white font-normal items-center rounded-md pl-3  bg-[#ff0000]"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="youtube"
                          >
                            <FaYoutube />
                            &nbsp;Youtube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FrontSidebar;
