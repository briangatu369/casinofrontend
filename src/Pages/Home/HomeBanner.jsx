import React from "react";
import Image from "../../assets/casinobanner.webp";

const Banner = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src={Image}
          alt="banner"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
