var city="Hyderabad";
var temperature=32;
var isRaining=false;
function weatherReport(city:string,temp:number,isRaining:boolean):void{
    console.log("In", city, " it is ", temp,"°C. Is it raining? ",isRaining);
}
weatherReport(city,temperature,isRaining);