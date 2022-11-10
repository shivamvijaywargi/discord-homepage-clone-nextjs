import React from "react";

const ReliableTech = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="grid place-items-center p-6 md:container md:mx-auto lg:p-12 py-10 space-y-4 sm:pt-16 md:pt-20 lg:pt-24">
        <h2 className="font-[900] text-gray-800 leading-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mx-auto md:max-w-xl lg:max-w-3xl md:text-center">
          RELIABLE TECH FOR STAYING CLOSE
        </h2>
        <p className="text-sm md:text-lg lg:text-xl leading-6 text-gray-500 lg:pt-4 md:text-center lg:mx-auto lg:max-w-4xl">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <img
          src="/assets/audio-video-calls.svg"
          alt="Audio Video Calls"
          className="w-full"
        />

        <div className="py-6 md:pt-8 lg:pt-12 grid place-items-center space-y-6 relative w-full">
          <img src="/assets/stars.svg" alt="Stars" className="absolute top-7" />
          <h3 className="font-[700] md:font-[800] text-gray-800 text-3xl md:mx-auto md:max-w-xl lg:max-w-3xl md:text-center md:pb-4">
            Ready to start your journey?
          </h3>
          <button className="bg-[#5865f2] text-white hover:bg-[#7983f5] px-8 py-4 rounded-full text-lg font-[600] transition hover:shadow-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default ReliableTech;
