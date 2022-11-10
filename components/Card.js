import React from "react";

const Card = ({
  card: { heading, content, image, direction, backgroundColor },
}) => {
  return (
    <div className={`${backgroundColor ? "bg-[#f6f6f6] py-3" : "bg-white"}`}>
      <div
        className={`p-6 md:container md:mx-auto lg:p-12 my-10 space-y-4 md:flex md:items-center md:justify-between xl:justify-between lg:gap-20 ${
          direction ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="md:flex-1 lg:flex-[1.5]">
          <img src={image} alt={heading} />
        </div>
        <div className="md:flex-1">
          <h2 className="font-[700] text-gray-800 text-lg leading-6 md:text-5xl md:max-w-xs">
            {heading}
          </h2>
          <p className="text-sm md:text-lg leading-6 text-gray-500 md:mt-8">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
