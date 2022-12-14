import React, { useEffect, useState } from "react";
import DisplayCheckbox from "../DisplayCheckbox/DisplayCheckbox";
import { useSelector } from "react-redux";
import TimeList from "../TimeList/TimeList";
import DataList from "../DataList/DataList";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const theme = useSelector((state) => state.theme);
  const [apiTime, setApiTime] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [number, setNumber] = useState();
  const [dataNumber, setDataNumber] = useState();
  async function getTime() {
    const api_data = await fetch("https://floating-brushlands-13647.herokuapp.com/time").then((res) =>
      res.json()
    );
    setApiTime(api_data.data);
    const uniqueIds = new Set([]);

    api_data.data?.map((item) => {
      const numberData = item.path.split("/").slice(2)[0];
      uniqueIds.add(numberData);
    });
    setNumber(uniqueIds);
  }
  async function getData() {
    const api_data = await fetch("https://floating-brushlands-13647.herokuapp.com/data").then((res) =>
      res.json()
    );
    setApiData(api_data.data);
    const uniqueIds = new Set([]);

    api_data.data?.map((item) => {
      const numberData = item.path.split("/").slice(2)[0];
      uniqueIds.add(numberData);
    });
    setDataNumber(uniqueIds);
  }

  useEffect(() => {
    getTime();
    getData();
  }, []);

  return (
    <>
      <div
        className={`h-20 w-full ${
          theme !== "dark" ? "bg-[#F1F5FD]" : "bg-[#676AD8]"
        } rounded-md p-6`}
      >
        <div className="flex flex-row">
          <span className=" flex-none self-center">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.93344 3.197C10.0306 2.65778 9.80055 1.80422 10.4854 1.59211C11.201 1.49245 11.96 1.43878 12.6628 1.65089C13.1841 1.97545 12.9669 2.68589 13.0666 3.197C14.9423 3.611 16.7108 4.58467 17.9426 6.07711C19.9998 8.45378 20.5109 12.0188 19.2152 14.881C17.7458 18.3744 13.7361 20.5364 10.0101 19.7953C6.01067 19.1488 2.86222 15.2924 3.07689 11.2368C3.11522 7.37278 6.16144 3.90745 9.93344 3.197ZM10.0714 4.75078C6.86422 5.36156 4.40578 8.50745 4.61022 11.7709C4.65878 15.2669 7.75355 18.354 11.2496 18.3872C14.5616 18.584 17.7407 16.0387 18.2773 12.765C18.7297 10.4548 17.8889 7.94522 16.1281 6.38122C14.5232 4.90667 12.2002 4.29589 10.0714 4.75078Z"
                fill={` ${theme !== "dark" ? "#4B50BA" : "#fff"}`}
              />
              <path
                d="M17.2296 3.17402C17.7279 2.83158 18.2262 3.32991 18.5738 3.65447C18.975 4.01991 19.4631 4.66391 18.952 5.15458C18.2441 5.78069 17.5056 4.85558 17.0813 4.33936C16.7338 4.0148 16.8156 3.40658 17.2296 3.17402Z"
                fill={` ${theme !== "dark" ? "#4B50BA" : "#fff"}`}
              />
              <path
                d="M10.787 6.64188C10.9557 5.9621 12.0699 5.97232 12.2155 6.66232C12.351 7.80465 12.2155 8.95465 12.2845 10.1021C12.6091 10.5187 13.0717 10.9097 13.0282 11.4949C13.0717 12.075 12.6142 12.466 12.305 12.8928C12.2539 13.5035 12.3944 14.5667 11.5 14.5718C10.6055 14.5667 10.7435 13.5035 10.695 12.8928C10.3883 12.4711 9.92577 12.0852 9.97177 11.5077C9.92066 10.9173 10.3909 10.5212 10.718 10.1021C10.7844 8.94954 10.649 7.79188 10.787 6.64188Z"
                fill={` ${theme !== "dark" ? "#4B50BA" : "#fff"}`}
              />
            </svg>
          </span>
          <h3
            className={`cursor-pointer font-bold text-xl font flex-1 w-5/6 text-left ${
              theme !== "dark" ? "text-[#4B50BA]" : "text-white"
            }  leading-[26px] pl-8  `}
          >
            Time
          </h3>
          <span
            className="flex-1 flex justify-end  self-center"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.97"
                d="M6.30832 13.25C11.325 13.0834 16.35 13.1667 21.3667 13.1917C21.3583 13.6 21.35 14.4084 21.3417 14.8167C16.5333 14.75 11.7083 15.0417 6.91665 14.7C6.75832 14.3417 6.45832 13.6167 6.30832 13.25Z"
                fill={` ${theme !== "dark" ? "#4B50BA" : "#fff"}`}
              />
              <rect
                x="0.5"
                y="0.5"
                width="26"
                height="26"
                rx="4.5"
                stroke={` ${theme !== "dark" ? "#4B50BA" : "#fff"}`}
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        {open && (
          <div className="mt-16 w-full text-left pl-32 h-full">
            <TimeList number={number} apiData={apiTime} />
            <DataList number={dataNumber} apiData={apiData} />
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
