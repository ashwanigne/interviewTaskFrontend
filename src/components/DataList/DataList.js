import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from "../Checkbox/Checkbox";

const DataList = ({ number, apiData }) => {
  const [fileName, setFileName] = useState();
  const [open, setOpen] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [indexing, setIndexing] = useState();
  const theme = useSelector((state) => state.theme);
  ///select all
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(apiData.map((li) => li.path.split("/").slice(3)[0]));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  /////single checkbox
  const handleClick = (e) => {
    const { name, checked } = e.target;
    setIsCheck([...isCheck, name]);

    if (!checked) {
      setIsCheckAll(false);
      setIsCheck(isCheck.filter((item) => item !== name));
    }
  };
  number = Array.from(number);

  function getFileName(pattern) {
    const retrievefilefromNumber = apiData.filter((arr) => {
      return arr.path.indexOf("/" + pattern) !== -1;
    });
    setFileName(retrievefilefromNumber);
  }

  useEffect(() => {
    setIsCheck([]);
    setIsCheckAll(false);
    console.log(open);
  }, [open]);

  return (
    <div className="mt-16">
      <h1
        className={` text-3xl cursor-pointer mb-8 ${
          theme !== "dark" ? "text-[#3D4149]" : "text-white"
        } text-lg leading-[23.79px]`}
        onClick={() => setOpenData(!openData)}
      >
        Data
      </h1>
      {openData && (
        <ul className="flex flex-col gap-6 list-inside">
          {number &&
            number.map((item, index) => {
              return (
                <li
                  className=" flex pl-11 text-xl leading-6  text-[#3D4149]"
                  key={index}
                  onClick={() => {
                    getFileName(item);
                    setIndexing(index);
                  }}
                >
                  <p
                    className={`${
                      theme !== "dark" ? "text-[#3D4149]" : "text-white"
                    } text-lg leading-[23.79px]`}
                    onClick={() => setOpen(!open)}
                  >
                    {item}
                  </p>
                  {open && indexing === index && (
                    <div className="mt-16 w-full text-left pl-32 h-full">
                      <div>
                        <div className="flex gap-4">
                          <Checkbox
                            type="checkbox"
                            name="selectAll"
                            id="selectAll"
                            handleClick={handleSelectAll}
                            isChecked={isCheckAll}
                          />
                          <p
                            className={`text-lg leading-[23.79px] ${
                              theme !== "dark" ? "text-[#3D4149]" : "text-white"
                            } text-lg leading-[23.79px]`}
                          >
                            Select All
                          </p>
                        </div>
                        {fileName.map((item) => {
                          return (
                            <div
                              className="flex flex-col gap-2"
                              key={item.path.split("/").slice(3)[0]}
                            >
                              <div className="flex gap-4">
                                <Checkbox
                                  type="checkbox"
                                  name={item.path.split("/").slice(3)[0]}
                                  id={item.path.split("/").slice(3)[0]}
                                  handleClick={handleClick}
                                  isChecked={isCheck.includes(
                                    item.path.split("/").slice(3)[0]
                                  )}
                                />
                                <label
                                  className={`${
                                    theme !== "dark"
                                      ? "text-[#3D4149]"
                                      : "text-white"
                                  } text-lg leading-[23.79px]`}
                                >
                                  <span className="text-lg leading-[23.79px]">
                                    {item.path.split("/").slice(3)[0]}
                                    &nbsp;&nbsp;
                                  </span>
                                  <span> {item.size}</span>
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default DataList;
