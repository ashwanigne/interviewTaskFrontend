import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { useQuery } from "@tanstack/react-query";
const DisplayCheckbox = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["checkboxData"],
    queryFn: () => fetch("https://floating-brushlands-13647.herokuapp.com").then((res) => res.json()),
  });

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.data.map((li) => li.size));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e) => {
    const { name, checked } = e.target;
    console.log("e.target", e.target.name);
    setIsCheck([...isCheck, name]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== name));
    }
  };

  const checkBox =
    data &&
    data?.data.map((item, index) => {
      return (
        <div key={item.size}>
          <div className="flex justify-start">
            <Checkbox
              type="checkbox"
              name={item.size}
              id={item.size}
              handleClick={handleClick}
              isChecked={isCheck.includes(item.size)}
            />
            <div className="ml-16 flex items-center">
              <p className="text-lg leading-[23.79px]">00000{index}.zip</p>
              <p className="ml-8 text-lg leading-[23.79px]">({item.size})</p>
            </div>
          </div>
          {isCheck.includes(item.size) && (
            <div className="flex flex-col justify-start items-start ml-40">
              <p className="text-lg leading-[23.79px]">{item.path}</p>
              <p className="text-lg leading-[23.79px]">{item.url}</p>
              <p className="text-lg leading-[23.79px]">{item.size}</p>
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="flex flex-col w-[32rem] justify-start">
      <div className="flex justify-start">
        <Checkbox
          type="checkbox"
          name="selectAll"
          id="selectAll"
          handleClick={handleSelectAll}
          isChecked={isCheckAll}
        />
        <p className="ml-16 text-lg leading-[23.79px]">Select All</p>
      </div>

      {checkBox}
    </div>
  );
};

export default DisplayCheckbox;
