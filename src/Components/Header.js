import React, { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineMail,
  AiOutlineLeft,
  AiOutlineReload,
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiFillWechat,
} from "react-icons/ai";
import { BiMenu, BiMinus } from "react-icons/bi";
import { FiMaximize } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
const Header = ({ maximise, minimise, close }) => {
  const [activeLink, setactiveLink] = useState("link1");
  const history = useHistory();
  return (
    <div className="w-full h-20 z-10 absolute header flex flex-col justify-between">
      <div className="headerUp flex items-center justify-between pl-1 pr-1">
        <div className="leftHeaderUp flex items-center ">
          <img
            className="object-contain h-8"
            src="https://topbestalternative.com/wp-content/uploads/2020/05/gameloop-logo.png"
            alt=""
          />
          <span className="text-white font-semibold font-mono text-xs">
            Gameloop
          </span>
        </div>
        <div className="rightHeaderUp flex items-center">
          <AiOutlineQuestionCircle className="mr-3" />
          <AiOutlineMail className="mr-3" />

          <span className="inline-block line-Up"></span>
          <BiMenu className="mr-3" />
          <Link to="/">
            <BiMinus className="mr-3" onClick={minimise} />
          </Link>
          <FiMaximize onClick={maximise} className="mr-3" />
          <Link className="mr-3" to="/" onClick={close}>
            X
          </Link>
        </div>
      </div>
      <div className="headerDown mb-2 flex items-center justify-between">
        <div className="leftHeaderDown flex items-center">
          <div className="flex items-center mr-5 ml-2 text-lg">
            <AiOutlineLeft className="mr-2 leftIcon" />
            <AiOutlineReload
              className="mr-2 leftIcon"
              onClick={() => {
                history.push("/");
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <Link
              className={`mr-5 font-mono text-lg font-semibold links ${
                activeLink === "link1" ? "linkActive" : ""
              }`}
              to="/gameloop"
              // onClick={() => {
              //   setactiveLink("link1");
              // }}
            >
              <span>Rcmd</span>
            </Link>
            <Link
              className={`mr-5 font-mono text-lg font-semibold links ${
                activeLink === "link2" ? "link2Active" : ""
              }`}
              to="/allGames"
              onClick={() => {
                setactiveLink("link2");
              }}
            >
              <span>All</span>
            </Link>
          </div>

          <div className="flex items-center ml-5 searchBar">
            <input className="outline-none border-none bg-transparent" />
            <AiOutlineSearch className="text-gray-500 midIcon" />
          </div>
        </div>
        <div className="rightHeaderDown flex items-end justify-end pr-3">
          <AiFillWechat className="text-lg text-gray-300 mr-3 rightIcon" />
          <AiOutlineArrowDown className="text-lg text-gray-300 mr-3 rightIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
