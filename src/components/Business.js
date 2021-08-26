import React from "react";
import plumber from "../assets/svg/plumber.svg";
import electrician from "../assets/svg/electrician.svg";
import landscaper from "../assets/svg/landscaper.svg";
import handyman from "../assets/svg/handyman.svg";
import childcare from "../assets/svg/child-care.svg";
import food from "../assets/svg/food.svg";
import other from "../assets/svg/other.svg";
import petcare from "../assets/svg/pet-care.svg";
import realtor from "../assets/svg/realtor.svg";

const Business = (props) => {
  const {
    name,
    phone,
    email,
    website,
    facebook,
    instagram,
    address,
    city,
    state,
    zip,
    description,
    category,
  } = props.info;

  return (
    <div className="flex border-r border-b border-l border-gray-200 ">
      <div className="px-6 py-4 border-r border-gray-200">
        {category === "plumber" && <img src={plumber} alt={name} />}
        {category === "electrician" && <img src={electrician} alt={name} />}
        {category === "handyman" && <img src={handyman} alt={name} />}
        {category === "childcare" && <img src={childcare} alt={name} />}
        {category === "petcare" && <img src={petcare} alt={name} />}
        {category === "realtor" && <img src={realtor} alt={name} />}
        {category === "landscaper" && <img src={landscaper} alt={name} />}
        {category === "food" && <img src={food} alt={name} />}
        {category === "other" && <img src={other} alt={name} />}
        {!category && <img src={other} alt={name} />}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl">
          {name} - {category}
        </div>
        <div className="text-gray-700 text-sm">{description}</div>
        <div className="text-gray-700 text-sm">
          {address} {city} {state} {zip}
        </div>
        <div className="text-gray-700 text-sm">
          {phone} {website} {email}
        </div>
        <div className="text-gray-700 text-sm">
          {facebook} {instagram}
        </div>
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
