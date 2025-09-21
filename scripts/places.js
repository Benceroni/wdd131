document.getElementById("currentyear").innerHTML = "©" + new Date().getFullYear() + "- Spencer Bell - Idaho, United States"
document.getElementById("lastModified").innerHTML = "last Modification: " + document.lastModified

let currentTemperature = 30;
let windSpeed = 14;
let conditions = "Overcast";

document.querySelector("#temperature").innerHTML = `${currentTemperature}°F`;
document.querySelector("#wind").innerHTML= `${windSpeed} MPH`;
document.querySelector("#conditions").innerHTML = conditions;
document.querySelector("#windchill").innerHTML = calculateWindChill();

function calculateWindChill(){
    if (currentTemperature > 50 || windSpeed <3 ){
        return "N/A"
    }

    let _windchill = Math.round(35.74 + .6215*currentTemperature - 35.75* Math.pow(windSpeed,.16) + .4275* currentTemperature * Math.pow(windSpeed,.16));

    return `${_windchill}°F`;
}