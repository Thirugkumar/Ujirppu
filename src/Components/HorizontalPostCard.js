import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
import newsData from "../news/NewsData.json";
import { useLocation } from "react-router-dom";

export const HorizontalPostCard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

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
    <>
      {newsData.map((newsItem) =>
        newsItem.category === category || category === null ? (
          <a href={newsItem.url}>
            <article
              key={newsItem.id}
              className="flex flex-col md:flex-row mb-5 rounded-lg relative w-full p-4 mx-auto mt-2 max-w-[95%] md:max-w-[99%] lg:max-w-[95%] dark:bg-darkPostBG bg-lightPostBG shadow-sm break-words hover:bg-gray-200 dark:hover:bg-gray-700 z-0"
            >
              <a
                className="mr-4 md:w-[13rem] rounded-lg block relative overflow-hidden w-full h-52 md:h-full"
                href={newsItem.url}
                title={newsItem.heading}
              >
                <div className=" w-full">
                  <img
                    src={require(`../assets/${newsItem.src}.avif`)}
                    alt="News pic"
                    className="object-cover w-full md:h-40 z-10"
                  />
                </div>
              </a>
              <div className="flex flex-col flex-1 m-0">
                <h2 className=" font-semibold text-[20px] dark:text-gray-200 text-gray-700">
                  <a
                    className=" hover:text-mainColor transition-colors"
                    href={newsItem.url}
                    rel="bookmark"
                    title={newsItem.short}
                  >
                    {newsItem.heading}
                  </a>
                </h2>
                <p className="text-sm mt-2 dark:text-textLight text-gray-500">
                  {newsItem.short}
                </p>
                <div className="flex justify-between pt-1">
                  <div className=" flex text-xs font-normal mt-1 dark:text-textLight text-gray-500 flex-wrap">
                    <span className="mr-1">
                      <span className="mr-1">by</span>
                      <span className="text-mainColor">{newsItem.author}</span>
                    </span>
                    <span className="mr-1">
                      <span className=" mr-1">•</span>
                      <time className="" dateTime={newsItem.date}>
                        {calculateAgoDAte(newsItem.date)}
                      </time>
                    </span>
                  </div>
                  <div className="flex gap-4 text-gray-500 ">
                    <li className=" text-lg list-none hover:text-blue-700 transform duration-200">
                      <FaFacebook />
                    </li>
                    <li className=" text-lg list-none hover:text-blue-400 transform duration-200">
                      <FaTwitter />
                    </li>
                    <li className=" text-lg list-none hover:text-blue-600 transform duration-200">
                      <FaLink />
                    </li>
                  </div>
                </div>
              </div>
            </article>
          </a>
        ) : (
          ""
        )
      )}
    </>
  );
};
