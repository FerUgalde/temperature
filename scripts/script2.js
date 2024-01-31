//functions

let counter = 0;

//1) creating the function
function increase(){
    console.log(++counter);
    document.getElementById("total").innerHTML = counter;
    if(counter==5){
        console.log("It's five");
    }
}
function decrease(){
    console.log(--counter);
    document.getElementById("total").innerHTML = counter;
}

//2) call/run/execute the function

function sayHi(){
    let userName = prompt("Enter your name: ");

    console.log("Welcome ... " + userName);
    document.getElementById("total").innerHTML = ("Welcome ... " + userName);
    
}

function multiByThree(){
    //1. get the number from a prompt
    let number = prompt("Enter the number you want: ");
    //2. multi the number
    multi = number * 3;
    //3. display the result
    console.log(multi);
    document.getElementById("total").innerHTML = multi;

}

// create a function that adding up two numbers
function addingNumbers(){
    let num1 = prompt("Enter the first number: ");
    let num2 = prompt("Enter the second number: ");
    result = parseInt(num1) + parseInt(num2);
    console.log(result);
    document.getElementById("total").innerHTML = result;
}