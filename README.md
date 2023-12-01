Application is running live 
frontend :   http://frontend.extenso.ie
backend endpoints:
http://backend.extenso.ie:5035/api/country/countriesList
http://backend.extenso.ie:5035/api/country/name/:countryName
http://backend.extenso.ie:5035/api/country/getlanguages
http://backend.extenso.ie:5035/api/country/returnCountryType

Application has been configured on the nginx server and it is accesible without any firewall restrictions for the subdomains frontend , backend
For local testing both the frontend and backend api can be downloaded and after installing all the packages with "npm install" , the frontend part it can be run with
"npm start" , case when it will automatically connect to the above backend server or if the links for fetching data will be changed in functions folder (fetchCountry, fetchCountryType) with the http://localhost:5035/...rest of the path for endpoint....then also can run locally with the backend api, after installing all the dependencies with "npm install command" and start the server with "node app.js" 

![alt text](https://github.com/stefandplac/bounce/blob/main/frontapi.jpg)
