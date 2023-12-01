import React from "react";
import { useState, useEffect } from "react";
import CountryNameTranslations from "./DisplayCountry/CountryNameTranslations";
import DisplayCountryName from "./DisplayCountry/DisplayCountryName";
import DisplayCountryID from "./DisplayCountry/DisplayCountryID";

const DisplayCountry = ({ countrydata, error }) => {
  return (
    <>
      {error!==null ? (
        <>Error</>
      ) : (
        <>
          {countrydata!==null ? (
            <div>
              <DisplayCountryName
                countryName={countrydata.name}
                maps={countrydata.maps}
                independent={countrydata.independent}
                unMember={countrydata.unMember}
                currencies={countrydata.currencies}
                region={countrydata.region}
                subregion={countrydata.subregion}
                capital={countrydata.capital}
                status={countrydata.status}
                languages={countrydata.languages}
                altSpellings={countrydata.altSpellings}
                capitalInfo={countrydata.capitalInfo}
                continents={countrydata.continents}
                population={countrydata.population}
                timezones={countrydata.timezones}
                startOfWeek={countrydata.startOfWeek}
                area={countrydata.area}
                borders={countrydata.borders}
                landlocked={countrydata.landlocked}
                demonyms={countrydata.demonyms}
                gini={countrydata.gini?countrydata.gini : []}
                flags={countrydata.flags}
                coatOfArms={countrydata.coatOfArms}
              />
              <DisplayCountryID
                tld={countrydata.tld}
                cca2={countrydata.cca2}
                cca3={countrydata.cca3}
                ccn3={countrydata.ccn3}
                fifa={countrydata.fifa}
                cioc={countrydata.cioc}
                idd={countrydata.idd}
                car={countrydata.car}
              />
              <CountryNameTranslations
                nameTranslations={countrydata.translations}
              />
            </div>
          ) : (
            <div>Please try to insert a valid country name</div>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCountry;
