import { React } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Highlight from "./Highlight";
import FrontSidebar from "./FrontSidebar";
import newsData from "../news/NewsData.json";
import { useLocation } from "react-router-dom";
import { HorizontalPostCard } from "./HorizontalPostCard";
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaShareSquare,
} from "react-icons/fa";

export const Post = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const postData = newsData.find((post) => post.id === parseInt(id, 10));

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between w-full mx-auto pt-20 lg:w-11/12 xl:max-w-screen-2xl px-2 lg:px-0">
        <FrontSidebar />
        <div className="mt-5 lg:m-0 w-[99%] lg:w-full mx-auto pb-10 px-2 lg:px-6 ">
          <nav className="flex items-center my-4">
            <a
              className="home text-mainColor uppercase font-extrabold border border-orange-300 hover:bg-orange-400 hover:shadow-sm shadow-orange-500 px-2 rounded-md hover:text-white"
              href="/"
            >
              முகப்பு
            </a>
            <FaAngleLeft className="dark:text-gray-300" />
            <a className=" dark:text-gray-300 px-2" href="/">
              {postData.newstitle}
            </a>
          </nav>
          <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold text-red-700 dark:text-white">
            {postData.heading}
          </h1>
          <div className="mt-2">
            <span className="mr-1">
              <span className="mr-1 dark:text-gray-300">by</span>
              <span className=" text-mainColor">{postData.author}</span>
            </span>
            <span className="mr-1">
              <span className=" mr-1 dark:text-gray-300">•</span>
              <time className=" dark:text-gray-300" datetime={postData.date}>
                {postData.date}
              </time>
            </span>
          </div>
          <div>
            <ul className="flex justify-end gap-2 m-0">
              <li>
                <a
                  alt="share"
                  className=" relative flex h-10 w-20 text-3xl text-gray-500 font-normal justify-center items-center rounded-md  border-2 hover:bg-mainColor hover:border-none transform duration-150"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaShareSquare />
                </a>
              </li>
              <li className=" block m-0">
                <a
                  alt="facebook"
                  className=" relative flex h-10 w-10 text-base text-white font-normal items-center rounded-md pl-3  bg-[#00229e]"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="facebook"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className=" block m-0">
                <a
                  alt="Twitter"
                  className=" relative flex h-10 w-10 text-base text-white font-normal items-center rounded-md pl-3  bg-[#17afca]"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className=" block m-0">
                <a
                  alt="whatsapp"
                  className=" relative flex h-10 w-10 text-base text-white font-normal items-center rounded-md pl-3  bg-[#00db5f]"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className=" block m-0">
                <a
                  alt="youtube"
                  className=" relative flex h-10 w-10 text-base text-white font-normal items-center rounded-md pl-3  bg-[#ff0000]"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="youtube"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <img
              src={require(`../assets/${postData.src}.avif`)}
              alt=""
              className="w-full"
            />
          </div>
          <div className="pr-2 text-justify text-gray-700 dark:text-gray-300 pt-4">
            {postData.news}
            <div className=" text-gray-700 dark:text-gray-200 font-bold text-2xl text-left pt-2">
              {postData.news1heading}
              <div className=" font-normal text-base text-justify dark:text-gray-300">
                {postData.news1}
              </div>
            </div>
            <div className=" text-gray-700 dark:text-gray-200 font-bold text-2xl text-left pt-2">
              {postData.news2heading}
              <div className=" font-normal text-base text-justify dark:text-gray-300">
                {postData.news2}
              </div>
            </div>
          </div>
          <div>
            <br />
            <hr />
            <hr />
            <hr />
            <p className=" pt-2 font-bold text-3xl text-gray-600 dark:text-gray-200">
              மேலதிக செய்திகள்
            </p>
          </div>
          {/*---------- melathika seithikal*/}
          <HorizontalPostCard />
        </div>
        <Highlight />
      </div>
    </>
  );
};
