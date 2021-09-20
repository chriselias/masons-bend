import React from "react";
import {
  FaWrench,
  FaBolt,
  FaBabyCarriage,
  FaDog,
  FaUser,
  FaHamburger,
  FaHome,
  FaTooth,
} from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";
import { GiGrass } from "react-icons/gi";

const Icon = ({ category, color }) => {
  return (
    <>
      {category === "plumber" && <FaWrench />}
      {category === "dentist" && <FaTooth />}
      {category === "electrician" && <FaBolt />}
      {category === "handyman" && <CgToolbox />}
      {category === "childcare" && <FaBabyCarriage />}
      {category === "petcare" && <FaDog />}
      {category === "food" && <FaHamburger />}
      {category === "realtor" && <FaHome />}
      {category === "landscaper" && <GiGrass />}
      {category === "other" && <FaUser />}
    </>
  );
};

export default Icon;
