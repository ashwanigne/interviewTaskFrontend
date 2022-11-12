import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../Acordion/Accordion";

const Main = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div style={{ borderLeft: "2px solid #ECEEF0" }} className="p-12">
      <h2
        className={`text-left font-bold text-[1.7rem] leading-[2.247rem] text-[#3D4149] py-4  ${
          theme !== "dark" ? "text-[#3D4149]" : "text-white"
        }`}
      >
        SPACE DATA
      </h2>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default Main;
