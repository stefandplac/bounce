const fetchCountryData = async (country, countryData, setCountryData,error) => {
  console.log("fetching data");
  try {
    const response = await fetch(
      `http://backend.extenso.ie:5035/api/country/name/${country}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    //console.log(data);
    if (data) {
      setCountryData(data[0]);
    }
    console.log("countrydata:fetcgdata - back in fetchDqata()", countryData);
  } catch (err) {
    error = { msg: "an eror trying happenned on the server side" };
  }
};
module.exports = fetchCountryData;
