
async function country(){
    const data =await fetch("https://restcountries.eu/rest/v2/lang/es");
    const countries=await data.json();
    countries.filter(ele => {
        if(ele.region == "Europe"){
            console.log(ele.name);
        }
    })
        
}         
country();