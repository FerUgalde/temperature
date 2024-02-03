function convertTemperature(){
    let scale =  document.getElementById('scale').value;
    let temperatureMax = parseFloat(document.getElementById('temperatureMax').value);
    let temperatureMin = parseFloat(document.getElementById('temperatureMin').value);
    let rangeConv = "";


    for(let temperature=temperatureMin; temperature<=temperatureMax; temperature++){
        if(scale=="Celsius"){
            // Convert to Fahrenheit
            var tempConv = (temperature * 9/5) + 32;
            var scaleConv = "Fahrenheit";
        }else if(scale=="Fahrenheit"){
            // Convert to Celsius
            var tempConv = (temperature - 32) * 5/9;
            var scaleConv = "Celsius";
        }
        rangeConv +=`<p>The conversion of ${scale} ${temperature}° to ${scaleConv}° is ${tempConv} °</p><br>`;
    }

    document.getElementById("conversion").innerHTML = rangeConv;

    if((temperatureMax<=-10 && scale=="Celsius") || (temperatureMax<=14 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryW'></div>";
    }else if((temperatureMax<=5 && scale=="Celsius") || (temperatureMax<=41 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryB'></div>";
    }else if((temperatureMax<=12 && scale=="Celsius") || (temperatureMax<=53.6 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryBL'></div>";
    }else if((temperatureMax<=23 && scale=="Celsius") || (temperatureMax<=73.4 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryY'></div>";
    }else if((temperatureMax<=30 && scale=="Celsius") || (temperatureMax<=86 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryO'></div>";
    }else if((temperatureMax<=50 && scale=="Celsius") || (temperatureMax<=122 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryRL'></div>";
    }else if((temperatureMax<=70 && scale=="Celsius") || (temperatureMax<=158 && scale=="Fahrenheit")){
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryR'></div>";
    }else{
        document.getElementById("mercury").innerHTML = "<div class='mercury mercuryGC'></div>";
    }
}
