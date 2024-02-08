import React from "react";
import { HorizontalPostCard } from "../Components/HorizontalPostCard";
import { FaChevronRight } from "react-icons/fa";
import FrontSidebar from "../Components/FrontSidebar";
import Breaking from "../Components/Breaking";
import Highlight from "../Components/Highlight";

const NewsPage = () => {
  return (
    <>
      <div className="mr-auto pt-[65px] md:pt-24">
        <span className=" hidden md:block">
          <Breaking />
        </span>
        <div className="flex flex-col lg:flex-row justify-between mt-[2rem] w-full md:w-[96%] lg:w-11/12 xl:max-w-screen-2xl mx-auto">
          <FrontSidebar />
          <div className="w-full overflow-hidden">
            <div className="title flex items-center dark:text-lightText mx-[1rem]">
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
export default NewsPage;
