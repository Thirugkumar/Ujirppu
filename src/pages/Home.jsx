import React from "react";
import { HorizontalPostCard } from "../Components/HorizontalPostCard";
import { FaChevronRight } from "react-icons/fa";
import FrontSidebar from "../Components/FrontSidebar";
import Breaking from "../Components/Breaking";
import Highlight from "../Components/Highlight";

const Home = () => {
  return (
    <>
      <div className="mr-auto pt-14 md:pt-24 ">
        <span className=" hidden md:block">
          <Breaking />
        </span>
        <div className="flex flex-col lg:flex-row justify-between mt-[2rem] w-full mx-auto md:w-[96%] lg:w-11/12 xl:max-w-screen-2xl">
          <FrontSidebar />
          <div className="w-full overflow-hidden">
            <div className="title flex items-center dark:text-lightText mx-[1rem] mt-4 lg:mt-0">
              Read More Recent News
              <FaChevronRight />
            </div>
            <HorizontalPostCard />
          </div>
          <Highlight />
        </div>
      </div>
    </>
  );
};
export default Home;
