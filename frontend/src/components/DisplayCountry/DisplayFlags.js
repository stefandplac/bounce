import React from "react";

const DisplayFlags = ({ flags, coatOfArms }) => {
  // console.log(flags);
  return (
    <div className="basis-1/3 w-full flex flex-col justify-center justify-items-center content-center items-center">
      <div className="w-3/6 mb-8">
        <img
          src={flags.png ? flags.png : flags.svg}
          alt={flags.alt}
          className=""
        />
      </div>
      <div className="w-3/6">
        <img
          src={coatOfArms.png ? coatOfArms.png : coatOfArms.svg}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default DisplayFlags;
