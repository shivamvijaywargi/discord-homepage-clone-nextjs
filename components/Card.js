import React from "react";

const Card = ({
  card: { heading, content, image, direction, backgroundColor },
}) => {
  return (
    <div className={`${backgroundColor ? "bg-[#f6f6f6]" : "bg-white"}`}>
      <div className={`p-6 my-10 space-y-4`}>
        <img src={image} alt={heading} />
        <h2 className="font-[700] text-lg leading-6">{heading}</h2>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Card;
