import React from "react";
import countryNames from "../../constants/countryLanguages";

const CountryNameTranslations = ({ nameTranslations }) => {
  return (
    <details className="collapse bg-stone-100">
      <summary className="collapse-title text-l font-medium  text-slate-600">
        Check country name translations in other languages
      </summary>
      <div className="collapse-content ">
        {nameTranslations!==null?(
          <>
                {Object.keys(nameTranslations).map((name,index) => (
                  <div className="badge badge-lg m-0.5 p-4 pt-6 pb-6 text-sm" id={index}>
                    <div className="flex flex-col pr-2">
                      <div className="rounded-full bg-stone-200 p-2 self-start">
                        {countryNames[name] ? countryNames[name].toLowerCase() : name}{" "}
                      </div>
                    </div>
                    <div className=" flex flex-col">
                      <div>{`official "${nameTranslations[name].official}"`}</div>
                      <div>{`common "${nameTranslations[name].common}"`}</div>
                    </div>
                  </div>
                ))}
          </>
        ):(<>N/A</>)}
        
      </div>
    </details>
  );
};

export default CountryNameTranslations;
