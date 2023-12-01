const fetchCountryType = async (countryDataType, error) => {
  console.log("fetching country type data");
  try {
    const response = await fetch(
      "http://backend.extenso.ie:5035/api/country/returncountrytype",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    if (data || typeof data != "undefined") {
      console.log("=========== inside fetch function");
      console.log(countryDataType);
      countryDataType = { ...data };
      console.log(countryDataType);
      console.log("================ end fetch funct");
    }
  } catch (err) {
    error = {
      errMsg: `an error was encounter while trying to fetch countryDataType ${err.message}`,
    };
  }
};
module.exports = fetchCountryType;
