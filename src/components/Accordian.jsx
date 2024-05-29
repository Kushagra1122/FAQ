import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { useState } from "react";
const Accordian = ({ data, index, toggled }) => {
  const [click, setclick] = useState(false);

  useEffect(() => {
    setclick(toggled[0] === index);
  }, [toggled[0]]);

  console.log(toggled)

  return (
    <div>
      <div key={index}>
        <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl sm:mx-5 xyz">
          <div className="block max-w-sm lg:p-6 md:p-5 sm:p-2  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950    ">
            <div className=" px-10 py-2">
              <div>
                <div className="flex justify-between items-center  ">
                  <span className="lg:text-xl sm:text-lg text-white ">
                    {data.title}
                  </span>
                  <span
                    className="lg:text-3xl sm:text-xl text-white px-0.5"
                    onClick={() => {
                      toggled[1](click ? null : index);
                    }}
                  >
                    {click ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-200 text-lg ${
                    click
                      ? "grid-rows-[1fr] opacity-100  py-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden  ">{data.ans}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
