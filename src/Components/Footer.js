import { React } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.webp";

export const Footer = (props) => {
  return (
    <>
      <footer className="relative float-left w-full bg-[#e5e5e5] dark:bg-darkPostBG dark:text-textDarkTheme text-gray-700">
        <div className="flex w-5/6 m-auto md:w-[96%] lg:w-11/12 xl:max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row w-full py-12 justify-between items-center">
            <div>
              <a className="flex items-center " href="/">
                <img alt="UJIRPPU" src={logo} className=" h-14" />
              </a>
            </div>
            <div className=" w-full lg:w-[500px] py-4">
              <p className=" text-center font-bold">
                உயிர்ப்பு செய்தி தளத்திற்கு அன்புடன் வரவேற்கின்றோம். இது ஒரு
                பல்லூடக செய்தி தளம் ஆகும். இங்கு அனைத்துசெய்திகளையும்
                உடனுக்குடன் பெற்றுக்கொள்ள முடியும்.
              </p>
            </div>
            <div>
              <ul className="flex flex-row gap-8 pr-4">
                <li className="text-white bg-gray-400 hover:bg-blue-800 dark:hover:bg-blue-800 dark:bg-gray-600 p-2 rounded-lg ">
                  <a
                    alt="facebook"
                    className=""
                    href="https://www.facebook.com/jegtheme/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="facebook"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="text-white bg-gray-400 hover:bg-red-500 dark:hover:bg-red-500 dark:bg-gray-600 p-2 rounded-lg">
                  <a
                    alt="youtube"
                    className="youtube btn"
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="youtube"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className=" text-white bg-gray-400 hover:bg-blue-400 dark:hover:bg-blue-400 dark:bg-gray-600 p-2 rounded-lg ">
                  <a
                    alt="twitter"
                    className="twitter btn"
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="twitter"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className=" text-white bg-gray-400 hover:bg-green-400 dark:hover:bg-green-400 dark:bg-gray-600 p-2 rounded-lg ">
                  <a
                    alt="whatsapp"
                    className="whatsapp btn"
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full float-left py-4 border-t-2 dark:border-gray-700 border-gray-400  ">
          <div className="w-5/6 m-auto flex flex-col-reverse lg:flex-row lg:justify-between md:w-[96%] lg:w-11/12 xl:max-w-screen-2xl">
            <div className="text-center" name="Footer Copyright">
              <div className="" data-version="2">
                Copyright © 2024{" "}
                <a
                  href="https://www.ujirppu.com/"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-blue-800 hover:text-orange-500 "
                >
                  Ujirppu™
                </a>
                . All Rights Reserved. Designed By{" "}
                <a
                  href="https://infonits.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500 "
                >
                  Infonits
                </a>
              </div>
            </div>
            <div className=" relative block m-0" name="Footer Menu">
              <ul className=" flex flex-wrap justify-center">
                <li>
                  <a
                    href="/"
                    className=" text-sm p-0 m-3 dark:hover:text-gray-200 hover:text-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-sm p-0 m-3 dark:hover:text-gray-200 hover:text-gray-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-sm p-0 m-3 dark:hover:text-gray-200 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-sm p-0 m-3 dark:hover:text-gray-200 hover:text-gray-800"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-sm p-0 m-3 dark:hover:text-gray-200 hover:text-gray-800"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
