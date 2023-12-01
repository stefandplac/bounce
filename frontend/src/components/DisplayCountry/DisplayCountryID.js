import React from "react";
import { phoneIcon, carIcon } from "../../constants/icons";

const DisplayCountryID = (props) => {
  const returnVal = (key) => {
    let s = "";
    if (key === "tld") {
      for (let i = 0; i < props[key].length; i++) {
        s += ` ${props[key]}`;
      }
      return s;
    }
    if (key === "idd") {
      s += `${props[key].root} ( `;
      for (let i = 0; i < props[key].suffixes.length; i++) {
        if (i === props[key].suffixes.length - 1)
          s += ` ${props[key].suffixes[i]} )`;
        else s += `${props[key].suffixes[i]},`;
      }
      return s;
    }
    if (key == "car") {
      for (let i = 0; i < props[key].signs.length; i++) {
        s += ` ${props[key].signs[i]} | `;
      }
      s += ` ( ${props[key].side} )`;
      return s;
    }

    return props[key];
  };
  const returnKey = (key) => {
    if (key === "tld") return "WEB: ";
    else if (key === "idd") {
      return phoneIcon;
    } else if (key === "car") {
      return carIcon;
    }

    return key.toUpperCase();
  };
  return (
    <div className="border-slate-100 rounded-xl mb-2 mt-2 flex flex-row p-4">
      {props!==null?(
        <>
              {Object.keys(props).map((key,index) => (
                  <div className="badge badge-lg m-0.5 p-4 pt-6 pb-6 text-sm  font-bold text-slate-600" id={index}>
                    <div className="flex flex-col pr-2">
                      <div className="rounded-full bg-stone-200 p-2 self-start">
                        {returnKey(key)}{" "}
                      </div>
                    </div>
                    <div className=" flex flex-col">
                      <div>{returnVal(key)}</div>
                    </div>
                  </div>
                ))}
        </>
      ):(<></>)}
      
    </div>
  );
};

export default DisplayCountryID;
