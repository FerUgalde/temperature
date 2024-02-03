//display numbers from 10 to 10; 10 by 10

let number = 10;
console.log("---------- While loop ----------------");
while(number<=100){
    console.log(number);
    number += 10;
}


let number2 = 10;
console.log("---------- Do loop ----------------");
do{
    console.log(number2);
    number2 += 10;
}while(number2<=100);


console.log("---------- For loop ----------------");
for(let i=10; i<=100; i+=10){
    console.log(i);
}

console.log("---------- Array ----------------");
let myArray = ["George","Andrew", "Daniel", "Ricardo","James", "Fernanda", "Rami", "Roneisha", "Guillermo", "Philip"];

for(let i=0; i<myArray.length; i++){
    document.write(`
        <p>${myArray[i]}</p>
    `);
}


// Challenge 
for(let i=0; i<=101; i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } else if (i%3==0){
        console.log("Fizz");
    } else if (i%5==0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
} 


// from 1 to 10; the result of multiply by 3

// 1 x 3 = 3
// 2 x 3 = 6
// 3 x 3 = 9

function multiplyBy(number, msg){
    document.write(`--- ${msg} --- ${number} ---`);
    for (let i=1; i<=10; i++){
        document.write(`<p>${i} x ${number} = ${i*number}</p>`)
    }
}

multiplyBy(3,"Multiply");
multiplyBy(7,"Mult");