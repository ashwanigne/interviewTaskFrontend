import React from "react";
import { useSelector } from "react-redux";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`flex min-h-screen  ${
        theme !== "dark" ? "bg-white" : "bg-[#3339cd]"
      }`}
    >
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
