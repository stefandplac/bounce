import './App.css';
import Searchbar from './components/Searchbar';
import DisplayCountry from './components/DisplayCountry';
import fetchCountryData from './functions/fetchCountry';
// import fetchCountryType from './functions/fetchCountryType';
import {useState,useEffect} from 'react';


function App() {
  const [country, setCountry]=useState(null);
  const [countryData, setCountryData]=useState(null);
  // let countryDataType = null;
  var error = null;
  
  //fetching countryDataType
  // fetchCountryType(countryDataType); 
  // console.log(countryDataType); 
  // console.log("data fetched country data type in app")

  useEffect(()=>{
    //if data is updated too fast to avoid multiple fetches to be displayed concurrently
    //we want only the last fetch considering the country update in state to be displayed
    //fetching 3 times we will only show once

    const controller = new AbortController();
    if(country && country.length>2){
      fetchCountryData(country,countryData, setCountryData,error);
      
    } else {
      setCountryData(null);
      error=null;
    }
    console.log(`country ${country}`)
    return ()=>{
      
      controller.abort();
      
    }
  },[country]);

console.log(`error ${error}`);
  console.log("fetched countryInfo end",countryData);

  return (
    <div className="w-full flex flex-row justify-center">
        <div className="w-3/4 m-4">
          
          <Searchbar setCountry={setCountry}/>
          <DisplayCountry countrydata={countryData?countryData :null} error={error}  />
        </div>
    </div>
  );
}

export default App;
