import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imgContainer">
        <img src={data.src.large} alt="" />
      </div>
      <a target="_blank" rel="noreferrer" href={data.src.large}>
        下載圖片
      </a>
    </div>
  );
};

export default Picture;
