import React from "react";

const DisplayCountryOnMap = ({ maps }) => {
  console.log(maps);
  return <div className="basis-1/3 w-full">{maps ? <></> : <></>}</div>;
};

export default DisplayCountryOnMap;
