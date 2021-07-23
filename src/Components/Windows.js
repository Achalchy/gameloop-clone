import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TrayContext } from "../AllGames";
const Windows = ({ show }) => {
  const trayValue = useContext(TrayContext);
  const history = useHistory();
  return (
    <div className="h-screen w-screen  text-white windows relative">
      <div
        onClick={() => history.push("/gameloop")}
        className="folder flex items-center absolute bottom-32 left-32 flex-col h-auto cursor-pointer  bg-opacity-5 hover:border-white w-20"
      >
        <img
          className="object-contain"
          src="https://topbestalternative.com/wp-content/uploads/2020/05/gameloop-logo.png"
          alt="GameloopIcon"
        />
        <span className="font-mono font-semibold text-sm">Gameloop</span>
      </div>
      {
        <div
          className={`footer  ${show !== false ? "block" : "none"} ${
            trayValue !== false ? "block" : "none"
          }`}
        >
          <div className="footerLogo cursor-pointer">
            <Link to="/gameloop">
              <img
                // onClick={() => (window.location = "/gameloop")}
                className="object-contain h-14"
                src="https://topbestalternative.com/wp-content/uploads/2020/05/gameloop-logo.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      }

      <span className="absolute bottom-0 right-1 font-mono text-sm text-black">
        Edition: Windows 10 Pro
      </span>
    </div>
  );
};

export default Windows;
