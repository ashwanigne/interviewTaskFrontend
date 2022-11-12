import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DisplayCheckbox = () => {
  const [pageData, setPageData] = useState([]);

  async function getData() {
    const api_data = await fetch(
      "https://floating-brushlands-13647.herokuapp.com"
    ).then((res) => res.json());

    let changed_data = api_data.data.map((dummy, dummyIndex) => {
      return {
        ...dummy,
        checked: false,
      };
    });
    let updated_data = [
      {
        label: "Row 1",
        data: [...changed_data],
      },
      {
        label: "Row 2",
        data: [...changed_data],
      },
      {
        label: "Row 3",
        data: [...changed_data],
      },
    ];
    setPageData(updated_data);
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(pageData);
  function ToggleAccordion(e) {
    var parent = e.target.closest(".border-item");
    // var panel = e.target.nextElementSibling;
    var panel = parent.querySelector(".panel");
    if (panel?.style?.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  const theme = useSelector((state) => state.theme);
  return (
    <div className="flex flex-col w-[32rem] justify-start">
      <div className="flex flex-col">
        {pageData.map((row, rowIndex) => {
          return (
            <div
              className="border-item my-8"
              key={rowIndex}
              onClick={ToggleAccordion}
            >
              <div className="flex justify-between content-center cursor-pointer py-8">
                <div
                  className={`font-bold text-xl ${
                    theme !== "dark" ? "text-[#3D4149]" : "text-white"
                  }`}
                >
                  {row.label}
                </div>
                <div
                  className={` ${
                    theme !== "dark" ? "text-[#3D4149]" : "text-white"
                  }`}
                >
                  <input
                    className="mr-2"
                    type={"checkbox"}
                    checked={row.data.every((item) => item.checked === true)}
                    onChange={(e) => {
                      let updated_data = [...pageData].map(
                        (newElm, newIndex) => {
                          return {
                            ...newElm,
                            data: newElm.data.map((el, elIndex) => {
                              return {
                                ...el,
                                checked:
                                  newIndex === rowIndex
                                    ? e.target.checked
                                    : el.checked,
                              };
                            }),
                          };
                        }
                      );

                      setPageData(updated_data);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                  Check all
                </div>
              </div>

              <div
                className="panel flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {row.data.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className={` flex pl-11 text-xl leading-6  ${
                        theme !== "dark" ? "text-[#3D4149]" : "text-white"
                      }`}
                    >
                      <input
                        className="mr-2"
                        type={"checkbox"}
                        checked={item.checked}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          let updated_data = [...pageData];
                          updated_data[rowIndex]["data"][itemIndex].checked =
                            e.target.checked;
                          setPageData(updated_data);
                        }}
                      />
                      {item.path}({item.size})
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayCheckbox;
