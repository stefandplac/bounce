const express = require("express");
const axios = require("axios");

const mapObjectProps = require("../functions/mapObjectProps");

const router = express.Router();

router.get("/name/:countryName", async (req, res) => {
  const { countryName } = req.params;
  console.log(countryName);
  try {
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`,
      { method: "GET" }
    ).then((response) => response.json());
    console.log(data);
    if (data) res.json(data);
    else res.send("");
  } catch (err) {
    console.log(`error: ${err.message}`);
    res.json({ error: "server error" });
  }
  //next();
});
router.get("/getlanguages", async (req, res) => {
  //fetching all the contries names
  try {
    const countries = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    }).then((response) => response.json());
    var languages = {};
    const languagesRawData = Object.values(countries)
      .filter((country) => typeof country.languages != "undefined")
      .map((country) => country.languages);

    for (let i = 0; i < languagesRawData.length; i++) {
      for (const [key, value] of Object.entries(languagesRawData[i])) {
        languages[key] = value;
      }
    }

    res.json(languages);
  } catch (err) {
    res.json({ error: "srerver error", msg: err.message });
  }
});

router.get("/returnCountryType", async (req, res) => {
  //this route will return the type - one single object for countries with all possible properties that exists more or less for each country object
  //scan an mapp each property that can include 1..n nested objects with n properties, not all the country objects have the same structure !!
  try {
    const countries = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    }).then((response) => response.json());

    let countryType = new Object();
    if (typeof countries != "undefined" && typeof countries != "null") {
      //console.log(countries[0]);
      for (let i = 0; i < countries.length; i++) {
        //select each country and map the properties of properties and so on to the end
        console.log(`RUN : ${i}`);
        mapObjectProps(countries[i], countryType);
      }
    } else {
      res.json({ error: "no data has fetched" });
    }

    res.json(countryType);
  } catch (err) {
    res.json({ error: err.message });
  }
});
router.get("/countriesList", async (req, res) => {
  try {
    const countries = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    }).then((response) => response.json());

    let allCountries = {};
    if (typeof countries != "undefined" && typeof countries != "null") {
      for (let i = 0; i < countries.length; i++) {
        console.log(`RUN : ${i}`);
        let cioc =
          typeof countries[i].cioc !== "undefined" ? countries[i].cioc : "N/A";
        allCountries = { ...allCountries, [cioc]: countries[i].name.official };
      }
      res.json(allCountries);
    } else {
      res.json({ error: "no data has fetched" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
