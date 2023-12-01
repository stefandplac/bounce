import React from "react";
import { Link } from "react-router-dom";

import DisplayFlags from "./DisplayFlags";
import countryNames from "../../constants/countryLanguages";
import countryList from "../../constants/countryList";

import { extendIcon } from "../../constants/icons";
import CitizensInMultipleLang from "./CitizensInMultipleLang";

const DisplayCountryName = ({
  countryName,
  maps,
  independent,
  capital,
  unMember,
  currencies,
  region,
  subregion,
  status,
  languages,
  altSpellings,
  capitalInfo,
  continents,
  population,
  timezones,
  startOfWeek,
  area,
  borders,
  landlocked,
  demonyms,
  gini,
  flags,
  coatOfArms,
}) => {
  const renderName = (key) => {
    if (key === "common") {
      return `Common Name : ${countryName[key]}`;
    } else if (key === "official") {
      return `Official Name: ${countryName[key]}`;
    }
    return;
  };
  const returnOnuMembAndStatus = () => {
    if (unMember) return `, ${status ? status : ""}, ONU member`;
    return `, ${status ? status : ""}, is not part of ONU`;
  };
  const displayCurrencies = () => {};

  const displayArray = (arr) => {
    let s = "";
    if (arr) {
      if (arr === continents) s += " continents ( ";
      else s = " ( ";

      for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) s += ` ${arr[i]} )`;
        else s += ` ${arr[i]}, `;
      }
    } else s = "N/A";
    return s;
  };

  return (
    <div className="bg-sky-50 rounded-xl mb-2 mt-2 flex flex-row p-4  text-slate-700">
      <div className="basis-2/3 flex flex-col">
        {(countryName!==null&&typeof(countryName)!=="undefined")?(
          <> 
                {Object.keys(countryName).map((key) => (
                <div className="">
                  {typeof countryName[key] === "object" ? (
                    <>
                      <span className="font-semibold">Native names</span>
                      {Object.entries(countryName[key]).map(([key,val],index) => (
                        <div className="flex flex-row" id={index}>
                          <div> {countryNames[key].toLowerCase()}:</div>
                          <div>
                              {` ${val.official}(${val.common}) -`}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    
                    renderName(key)
                  )}
                  </div>
              ))}
          </>
        ):(<></>)}
        
          
        <div>
          Alternative spelling :
          {(altSpellings!==null&&typeof(altSpellings)!="undefined")?(
            <>
                {altSpellings.map((spell) => (
                  <span className="">{` (${spell}) `}</span>
                ))}
            </>
          ):(
              <></>
          )}
          
        </div>
        <div>
          {independent ? (
            <>Independent country {returnOnuMembAndStatus()}</>
          ) : (
            <>Not an independent country {returnOnuMembAndStatus()}</>
          )}
        </div>
        <div>
          <>
            Currencies :
            {(currencies!==null&&typeof(currencies)!=="undefined")?(
              <>
                    {Object.keys(currencies).map((currency) => (
                      <div className="badge badge-lg m-0.5 p-4 pt-6 pb-6 text-sm ml-3 bg-sky-50 mr-4">
                        <div className="flex flex-col pr-2">
                          <div className="rounded-full bg-sky-100 p-2 self-start">
                            {currency}{" "}
                          </div>
                        </div>
                        <div className=" flex flex-col">
                          <div>{`"${currencies[currency].name}"`}</div>
                          <div>{`"${currencies[currency].symbol}"`}</div>
                        </div>
                      </div>
                    ))}
              </>
            ):(
                <></>
            )}
            
          </>
        </div>
        <div>
          Location : {` ${region?region:"N/A"}, ${subregion?subregion:"N/A"}, ${(continents!==null&&typeof(continents)!=="undefined")?displayArray(continents):"N/A"}`}
        </div>
        <div>
          Neighbours :
          {(borders!==null && typeof(borders)!=="undefined")?(
            <>
              {borders.map((el) => (
                <>{`-  ${countryList[el] ? countryList[el] : el}  `}</>
              ))}
            </>
          ):(<>N/A</>)}
          
        </div>
        <div>
          Timezones ( {timezones?displayArray(timezones):"N/A"} ) , Week starts on {startOfWeek?startOfWeek:"N/A"}
        </div>
        <div>
          {`Capital : ${capital?capital:""} ${`, ( Lat ${capitalInfo?.latlng[0]}, Long ${capitalInfo?.latlng[1]}) `}`}
        </div>
        <div>Spoken languages :{(languages!==null&&typeof(languages)!=="undefined")?displayArray(Object.values(languages)):"N/A"}</div>

        <div>
          {`Population : ${population ? population : "N/A"}, Area : ${
            area ? area : "N/A"
          } km2, ${
            landlocked
              ? "Entirely or almost entirely surrounded by land"
              : "Has access to the sea or to the ocean"
          } `}
        </div>
        <div>
          Gini :{" "}
          {(gini!==null&&typeof(gini)!=="undefined")?(
            <>
              {Object.keys(gini).map((el) => (
                <>{`  ${el}(${gini[el]}) `}</>
              ))}
            </>
          ):(<>N/A</>)}
          
        </div>
        <div>
          See it on{" "}
          <a className="font-bold" target="_blank" href={maps.googleMaps?maps.googleMaps:null}>
            googleMaps
          </a>
          /
          <a target="blank" className="font-bold" href={maps.openStreetMaps?maps.openStreetMaps:null}>
            OpenStreetMaps
          </a>
        </div>

        <div>
          <CitizensInMultipleLang demonyms={demonyms?demonyms:null} />
        </div>
      </div>

      <DisplayFlags flags={flags?flags:null} coatOfArms={coatOfArms?coatOfArms:null} />
    </div>
  );
};

export default DisplayCountryName;
