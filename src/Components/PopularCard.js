import React from "react";

const PopularCard = ({
  thumbnail,
  title,
  desc,
  btn,
  id,
  btnUrl,
  platform,
  publisher,
}) => {
  return (
    <div className="card relative" key={id}>
      <div>
        <img className="cardImage object-cover" src={thumbnail} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-white font-mono">
          <h2 className="text-base font-bold">{title}</h2>
          <p className="text-sm font-light">{desc + "..."}</p>
        </div>
        <div>
          <div className="w-16 grid place-items-center  h-7  btn ">
            <a href={btnUrl} rel="noreferrer" target="_blank">
              {btn}
            </a>
          </div>
        </div>
      </div>
      <div className="devInfo absolute bottom-0 mt-2 right-0 left-0 text-white font-sans font-extralight flex items-center justify-between text-sm">
        <p>{platform}</p>
        <p>{publisher}</p>
      </div>
    </div>
  );
};

export default PopularCard;
