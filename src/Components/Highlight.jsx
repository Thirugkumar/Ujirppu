import React from "react";
//import { HighlightData } from "./HighlightData";
import newsData from "../news/NewsData.json";

function Highlight() {
  const calculateAgoDAte = (date) => {
    var providedDate = new Date(date);
    var currentDate = new Date();
    var difference = currentDate.getTime() - providedDate.getTime();
    var differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (differenceInDays === 0) {
      return "Today";
    } else {
      return differenceInDays + " Days ago";
    }
  };

  return (
    <React.Fragment>
      <section>
        <div className="hidden lg:block lg:w-96 top-24 sticky transform-none my-4">
          {newsData.map((newsItem) =>
            newsItem.subtitle ? (
              <div>
                <a href={newsItem.url}>
                  <div className=" flex flex-row mb-2 dark:bg-darkPostBG bg-lightPostBG shadow-sm break-words dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                    <div class="flex flex-col justify-between p-2 leading-normal">
                      <h2 class=" text-md font-semibold text-gray-600 dark:text-white hover:text-mainColor dark:hover:text-mainColor">
                        {newsItem.heading}
                      </h2>
                      <div className="flex justify-between">
                        <p class="mb-1 ml-2 text-xs font-light text-gray-400">
                          <span>{newsItem.author}</span>
                        </p>
                        <p class="mb-1 mr-8 text-xs font-light text-gray-400">
                          <span> {calculateAgoDAte(newsItem.date)}</span>
                        </p>
                      </div>
                    </div>
                    <img
                      className="object-cover w-full rounded-b-lg md:h-32 md:w-32 md:rounded-none md:rounded-r-lg"
                      src={require(`../assets/${newsItem.src}.avif`)}
                      alt=""
                    />
                  </div>
                </a>
              </div>
            ) : (
              " "
            )
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Highlight;
