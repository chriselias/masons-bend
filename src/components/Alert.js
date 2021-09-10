import React from "react";

const Alert = (props) => {
  const { color = "red", text } = props;

  return (
    <div>
      <div
        className={`py-3 px-5 mb-4 bg-${color}-100 text-${color}-900 text-sm rounded-md border border-${color}-200 flex items-center col-span-3`}
        role="alert"
      >
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Alert;
