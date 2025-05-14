"use client";
import { TbHeadphonesFilled } from "react-icons/tb";
import { TbHeadphonesOff } from "react-icons/tb";
import { useState, useEffect } from "react";

export default function Toggle() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("📦 checked 값 변경됨:", checked);
  }, [checked]);

  return (
    <label
      htmlFor="CTI"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="CTI"
        value={""}
        className="sr-only peer"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <div className="group peer ring-0  bg-[#1AD498] rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-[#ff665c]  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-hover:after:scale-95">
        <TbHeadphonesOff className="absolute top-[10px] left-[13px] stroke-gray-900  w-7 h-7" />
        <TbHeadphonesFilled className="absolute  top-[9px] right-[12px] stroke-gray-900 w-7.5 h-7.5" />
      </div>
    </label>
  );
}
