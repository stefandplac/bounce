import React from "react";
import countryLanguages from "../../constants/countryLanguages";

const CitizensInMultipleLang = ({ demonyms }) => {
  return (
    <details className="collapse">
      <summary className="collapse-title text-l font-medium  text-slate-600">
        citizens of Romania (M/F) - translations in other languages
      </summary>
      <div className="collapse-content">
        {demonyms!==null?(
          <>
              {Object.keys(demonyms).map((name,index) => (
                <div className="badge badge-lg m-0.5 p-4 pt-6 pb-6 text-sm" id={index}>
                  <div className="flex flex-col pr-2">
                    <div className="rounded-full bg-sky-200 p-2 self-start ">
                      {countryLanguages[name]
                        ? countryLanguages[name].toLowerCase()
                        : name}{" "}
                    </div>
                  </div>
                  <div className=" flex flex-col text-stone-700">
                    <div>{`F "${demonyms[name].f}"`}</div>
                    <div>{`M "${demonyms[name].m}"`}</div>
                  </div>
                </div>
              ))}
          </>
        ):(<>N/A</>)}
        
      </div>
    </details>
  );
};

export default CitizensInMultipleLang;
