import React, { useState } from "react";
import Header from "./Components/Header";
import { AllData } from "./Data/allData.js";
import PopularCard from "./Components/PopularCard";

export const TrayContext = React.createContext(false);
const AllGames = () => {
  const [width, setwidth] = useState(`11/12`);
  const [tray, setTray] = useState(false);
  const minimiseHandler = () => {
    if (!tray) {
      setTray(true);
    } else {
      setTray(false);
    }
  };

  const closeTray = () => {
    setTray(false);
  };
  function maxHandler(w) {
    if (width === "11/12") {
      setwidth("full");
    } else {
      setwidth("11/12");
    }
  }
  return (
    <TrayContext.Provider value={tray}>
      <div
        className={`border relative border-black w-${width} h-screen overflow-y-scroll bg-black pb-10`}
      >
        <Header
          maximise={maxHandler}
          minimise={minimiseHandler}
          close={closeTray}
        />

        <div className="allMain h-auto relative  w-full overflow-y-scroll  flex flex-wrap flex-1 items-center justify-center pt-20">
          <h1 className="text-white absolute top-8 text-2xl space-x-1">
            AllGames
          </h1>
          {AllData.map((elm, index) => {
            return (
              <PopularCard
                className="allCards"
                key={index}
                title={elm.title}
                desc={elm.short_description.substring(0, 50)}
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
    </TrayContext.Provider>
  );
};

export default AllGames;
