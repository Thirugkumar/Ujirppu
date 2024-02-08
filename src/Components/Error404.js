export const Error404 = () => {
  return (
    <>
      <div class="w-full h-[30rem] flex justify-center items-center flex-col dark:text-white">
        <h3 className="text-[8rem] h-[10rem]">404</h3>
        <h4 className="text-[1.8rem] dark:text-gray-300">
          There's nothing here!
        </h4>
        <p className="text-center">
          Sorry, the page you were looking for in this News does not exist.
        </p>
        <a
          className=" inline-block text-sm font-bold px-8 py-2 mt-4 bg-red-600 rounded-lg text-white opacity-90 hover:bg-opacity-100 homepage btn"
          href="/"
        >
          Go Back Home
        </a>
      </div>
    </>
  );
};
