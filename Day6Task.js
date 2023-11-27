var request=new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
//    console.log(res);
  //  a. Get all the countries from Asia continent /region using Filter function
 var Asia_Reg=res.filter((ele)=>ele.region=="Asia");
   console.log(Asia_Reg);
  
   //b. Get all the countries with a population of less than 2 lakhs using Filter function
   var popu1=res.filter((ele)=>ele.population<200000);
   console.log(popu1);
  
 //  c. Print the following details name, capital, flag, using forEach function
 res.forEach((ele)=>console.log(`Country Name: ${ele.name.common}, Capital: ${ele.capital}, flag: ${ele.flag}`));

 //d. Print the total population of countries using reduce function
 var sumpop=res.reduce((acc,cv)=>acc+cv.population,0);
 console.log(sumpop);

 //e. Print the country that uses US dollars as currency.
 var UsdCountries=res.filter((ele)=>{return ele.currencies && ele.currencies.hasOwnProperty('USD');});
 console.log(UsdCountries);
}