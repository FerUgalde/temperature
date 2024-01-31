function convertTemperature(){
    let scale =  document.getElementById('scale').value;
    let temperature = document.getElementById('temperature').value;

    if(scale==="c"){
        let fahrenheit = (temperature * 9/5) + 32;
        document.getElementById("conversion").innerHTML = "The conversion of Celsius " + temperature + "° to Fahrenheit is " + fahrenheit + "°";
    }else if(scale==="f"){
        let celsius = (temperature - 32) * 5/9;
        document.getElementById("conversion").innerHTML = "The conversion of Fahrenheit " + temperature + "° to Celsius is " + celsius + "°";
    }
}

