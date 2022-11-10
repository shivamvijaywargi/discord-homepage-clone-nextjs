import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#404eed] overflow-hidden z-[9999]">
      <div className="z-30 flex flex-col lg:justify-center lg:items-center lg:text-center text-white p-6 mt-6 lg:mt-16 pb-0 relative md:h-[80vh] lg:h-[70vh] xl:h-[60vh] lg:container lg:mx-auto">
        <div className="z-20 space-y-4 lg:space-y-8">
          <h1 className="font-[900] text-3xl sm:text-5xl md:text-6xl text-center md:text-left lg:text-center md:max-w-lg xl:max-w-4xl lg:mx-auto">
            IMAGINE A PLACE...
          </h1>
          <p className="leading-7 md:max-w-lg lg:max-w-3xl lg:text-xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="space-y-4 sm:space-x-4 md:space-x-0 lg:space-x-4">
            <button className="bg-white text-black hover:text-blue-500 px-8 py-4 rounded-full text-lg font-[600] transition hover:shadow-2xl">
              <svg
                // width="24"
                // height="24"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 mr-3"
              >
                <g fill="currentColor">
                  <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                  <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                </g>
              </svg>
              Download for Windows
            </button>
            <button className="bg-[#23272a] hover:bg-[#36393f] px-8 py-4 rounded-full text-lg font-[600] md:block lg:inline transition hover:shadow-2xl">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="mt-14 h-full w-full z-10">
          <img
            src="/assets/home-bg.svg"
            alt="Background"
            className="md:absolute hidden md:block md:top-auto md:bottom-[113px] lg:bottom-[190px] md:max-w-[1550px] md:left-[-50%] lg:left-[-25%] xl:left-[-1%] transform md:scale-[1.6] lg:scale-[2] xl:scale-[1.8] xl:bottom-[153px] -z-10"
          />
          <img
            src="/assets/home-left.svg"
            alt="Have fun"
            className="-z-10 -ml-20 md:hidden lg:block lg:absolute lg:left-[-40%] xl:left-[-15%] lg:bottom-0"
          />
          <img
            src="/assets/home-right.svg"
            alt="Discuss"
            className="md:absolute md:right-0 md:bottom-0 hidden md:block md:left-[50%] lg:left-auto lg:right-[-40%] -ml-20 xl:right-[-15%] -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
