/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "../components/LeftNavMenuItem";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  console.log("MobileMenu :", mobileMenu);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);

      case "home":
        return setSelectedCategory(name);

      case "menu":
        return false;

      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px]  overflow-y-auto h-[calc(100%-56px)] md:h-full lg:h-full xl:h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px]  md:translate-x-[0px] transition-all ${
        mobileMenu ? " translate-x-[0px]" : ""
      }`}
    >
      <div className="flex px-5 flex-col overflow-auto">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2] " />

        <div className="flex flex-col items-center gap-2">
          <div className="text-white/[0.5] text-[12px]">
            Clone by: Nikhil Patil
          </div>
          <div className="flex justify-evenly gap-3 px-2 text-white my-2">
            <a
              href="https://github.com/Nikhil1254"
              className="text-white cursor-pointer text-[20px] w-[35px] h-[35px] rounded-full bg-slate-600  flex items-center justify-center "
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-patil-759377180/"
              className="text-white cursor-pointer text-[20px] w-[35px] h-[35px] rounded-full bg-slate-600  flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://leetcode.com/np0129999/"
              className="cursor-pointer text-[20px] w-[35px] h-[35px] rounded-full bg-slate-600 flex items-center justify-center text-white"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
