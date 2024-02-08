import { React, useState } from "react";
import { motion } from "framer-motion";

export const BreakingPostCard = (props) => {
  const [isExpaned, setIsExpaned] = useState(false);

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };
  return (
    <motion.div
      layout
      onClick={() => {
        setIsExpaned(!isExpaned);
      }}
    >
      {!isExpaned ? (
        <motion.div className="h-full md:h-[12rem] w-full mx-auto rounded-lg dark:bg-darkPostBG bg-lightPostBG shadow-sm break-words dark:hover:bg-gray-700 overflow-hidden md:w-[96%] lg:w-11/12 xl:max-w-screen-2xl cursor-pointer">
          <motion.a className="w-full h-full md:h-[12rem] flex flex-col md:flex-row overflow-hidden dark:hover:bg-gray-700">
            <motion.div>
              <img
                src={props.src}
                alt="Breaking News pic"
                className="object-cover w-full p-4 md:h-full"
              />
            </motion.div>
            <motion.div className=" p-4 text-gray-600 dark:text-white flex flex-col justify-between">
              <motion.h2 className=" font-semibold text-2xl hover:text-mainColor">
                {props.title}
              </motion.h2>
              <motion.h3 className=" text-lg text-gray-400">
                {props.subtitle}
              </motion.h3>
              <motion.div className=" flex-wrap flex text-[12px] text-gray-400 font-normal mt-2 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
                <motion.span className=" flex">
                  <motion.span className="author-mssg text-mainColor">
                    {props.mssg}
                  </motion.span>
                </motion.span>
                <motion.span className="flex">
                  <motion.span className="flex mx-1">•</motion.span>
                  <motion.time
                    className="published"
                    dateTime="2024-01-14T12:37:00+05:30"
                  >
                    {props.time}
                  </motion.time>
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>
      ) : (
        <section className="mx-auto w-[95%] p-4 rounded-lg bg-lightPostBG dark:bg-darkPostBG md:w-[95%] lg:w-11/12 xl:max-w-screen-2xl">
          <motion.h2 className=" text-center text-4xl text-mainColor font-bold dark:text-lightText">
            {props.title}
          </motion.h2>
          <motion.div className=" flex flex-col-2 px-2  py-2">
            <motion.img
              src={props.src}
              alt="Breaking News pic"
              className=" w-1/2 object-cover pr-10"
            />
            <motion.p
              className=" text-justify text-md font-semibold text-gray-800 dark:text-lightText"
              {...animated}
            >
              {props.breaknews}
            </motion.p>
          </motion.div>

          <motion.div
            {...animated}
            className="flex items-center justify-center mt-2"
          >
            <motion.button
              className=" uppercase text-base font-semibold text-white bg-mainColor px-20 mr-4 py-1 border-none rounded-md cursor-pointer mb-8"
              onClick={() => {
                setIsExpaned(!isExpaned);
              }}
            >
              Collapse
            </motion.button>
          </motion.div>
        </section>
      )}
    </motion.div>
  );
};
