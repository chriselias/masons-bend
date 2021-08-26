import React from "react";
import plumber from "../assets/svg/plumber.svg";
import electrician from "../assets/svg/electrician.svg";
import landscaper from "../assets/svg/landscaper.svg";
import handyman from "../assets/svg/handyman.svg";

const Business = (props) => {
  const { name, phone, email, category } = props.info;

  return (
    <div className="flex border-r border-b border-l border-gray-200 ">
      <div className="px-6 py-4 border-r border-gray-200">
        {category === "plumber" && <img src={plumber} alt={name} />}
        {category === "electrician" && <img src={electrician} alt={name} />}
        {!category && <img src={landscaper} alt={name} />}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {phone} | {email}
        </p>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        {category && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
        )}
      </div> */}
    </div>
  );
};

export default Business;
