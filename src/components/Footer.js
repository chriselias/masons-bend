import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p className="text-center text-gray-600 text-xs my-8">
        Any questions of concerns, please contact Chris Elias |{" "}
        <Link to="/privacy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
