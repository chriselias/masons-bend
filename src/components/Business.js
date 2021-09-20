import React from "react";
import Icon from "./Icon";
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
    <div className="flex px-4 mb-2 rounded-lg items-center hover:bg-background">
      <div className="">
        <div className="bg-primary rounded-lg p-4">
          <Icon category={category} />
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-md text-text">{name}</div>
        <div className="text-gray-700 text-sm">{category}</div>
        {/* <div className="text-gray-700 text-sm">{description}</div>
        <div className="text-gray-700 text-sm">
          {address} {city} {state} {zip}
        </div>
        <div className="text-gray-700 text-sm">
          {phone} {website} {email}
        </div>
        <div className="text-gray-700 text-sm">
          {facebook} {instagram}
        </div> */}
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
