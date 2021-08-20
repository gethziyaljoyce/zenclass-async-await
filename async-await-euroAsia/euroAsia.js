async function regionEurope(){
    const data=await fetch("https://restcountries.eu/rest/v2/region/europe");
const countries=await data.json();

const data1=await fetch("https://restcountries.eu/rest/v2/region/asia");
const countries1=await data1.json();
console.log(countries.concat(countries1));

}
regionEurope();