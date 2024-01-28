function convertCtoF(){
    let temperature = Number(prompt("Enter temperature in Celsius: "));
    let fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("conversion").innerHTML = "The conversion of Celsius " + temperature + "° to Fahrenheit is " + fahrenheit + "°";
}