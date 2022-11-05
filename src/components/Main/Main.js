import React from "react";
import Accordion from "../Acordion/Accordion";

const Main = () => {
  return (
    <div
      style={{ borderLeft: "2px solid #ECEEF0", height: "100vh" }}
      className="p-12"
    >
      <h2 className="text-left font-bold text-[1.7rem] leading-[2.247rem] text-[#3D4149] py-4">
        SPACE DATA
      </h2>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default Main;
