import React, { useState } from "react";
import Accordion from "../Acordion/Accordion";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="w-[9rem]">
        <Sidebar />
      </div>
      <div className="w-[calc(100vw-7rem)]">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
