import React, { useRef, useState } from "react";
import Header from "./Header";
import Sliders from "./Sliders";
import PopularCard from "./PopularCard";
import { dataArray } from "../Data/data.js";
import { actions } from "../Data/actionData.js";
import { moreDatas } from "../Data/MoreData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Gameloop = ({ minimising, cut }) => {
  const [width, setwidth] = useState(`11/12`);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  function maxHandler(w) {
    if (width === "11/12") {
      setwidth("full");
    } else {
      setwidth("11/12");
    }
  }

  function scroll(offSet) {
    ref.current.scrollLeft += offSet;
  }

  function scroll2(offset) {
    ref2.current.scrollLeft += offset;
  }

  function scroll3(offset) {
    ref3.current.scrollLeft += offset;
  }
  return (
    <div
      className={`border relative border-black w-${width} h-screen overflow-y-scroll gameLoop bg-black pb-10`}
    >
      <Header maximise={maxHandler} minimise={minimising} close={cut} />
      <div className="main relative">
        <Sliders />
        <h2 className="rowName">Popular</h2>
        <span className="lArrow">
          <AiOutlineLeft onClick={() => scroll(-500)} />
        </span>
        <span className="rArrow ">
          <AiOutlineRight onClick={() => scroll(500)} />
        </span>
        <div
          className="popularRow overflow-x-scroll flex items-center absolute h-64 w-full bg-transparent bottom-0 left-0 right-0 "
          ref={ref}
        >
          {dataArray.map((elm, i) => {
            return (
              <PopularCard
                title={elm.title}
                desc={elm.short_description.substring(0, 20)}
                thumbnail={elm.thumbnail}
                id={elm.id}
                btn="view"
                btnUrl={elm.game_url}
                platform={elm.platform}
                publisher={elm.publisher}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-10 relative">
        <h1 className="row2Name">Actions</h1>
        <span className="l2Arrow">
          <AiOutlineLeft onClick={() => scroll2(-300)} />
        </span>
        <span className="r2Arrow ">
          <AiOutlineRight onClick={() => scroll2(300)} />
        </span>
        <div
          className="actionsRow flex items-center mt-3 overflow-x-scroll"
          ref={ref2}
        >
          {actions.map((elm, i) => {
            return (
              <PopularCard
                title={elm.title}
                desc={elm.short_description.substring(0, 20)}
                thumbnail={elm.thumbnail}
                id={elm.id}
                btn="view"
                btnUrl={elm.game_url}
                platform={elm.platform}
                publisher={elm.publisher}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-10 relative">
        <h1 className="row2Name">MoreGames</h1>
        <span className="l3Arrow">
          <AiOutlineLeft onClick={() => scroll3(-300)} />
        </span>
        <span className="r3Arrow ">
          <AiOutlineRight onClick={() => scroll3(300)} />
        </span>
        <div
          className="actionsRow flex items-center mt-3 overflow-x-scroll"
          ref={ref3}
        >
          {moreDatas.map((elm, i) => {
            return (
              <PopularCard
                title={elm.title}
                desc={elm.short_description.substring(0, 20)}
                thumbnail={elm.thumbnail}
                id={elm.id}
                btn="view"
                btnUrl={elm.game_url}
                platform={elm.platform}
                publisher={elm.publisher}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gameloop;
