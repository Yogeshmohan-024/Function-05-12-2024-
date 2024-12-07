// CalculateArea Radius

const calculatearea=(radius=60)=>{ 
    const pi=3.14;
    const area=pi*radius*radius;
    return area;
}
console.log(calculatearea());

// Arrow function

const isEven=(number)=>{
    return(number % 2 === 0)
}
console.log(isEven(2));
console.log(isEven(7));

// Default parameters
function greetUser(names="helloteam",message="Welcome to vts"){
    return(`${names} ${message}`)
}
console.log(greetUser())


// IIFE 
{
(function Invoke(){
    let greetmessage = "It Is Invoke Function"
    console.log(`greetmessage`);
})();
}

// 06/12/2024 Task

// Write a Function to Add Two Numbers
function add(a,b){
    return(a+b);
}
console.log(add(20,77));

// Write a Function to Check Even or Odd

let Even_add=()=>{
    let numbers=90
    if(numbers % 2 === 0){
        console.log(`${numbers} IT IS AN EVEN NUMBER`);
    }
    else if(isNaN(numbers)){
        console.log("Invalid Input");
    }
    else{
        console.log(`${numbers} IT ID AN ADD NUMBER`);
    }
}
Even_add();

// Write a Function to Find the Maximum of Two Number

 let max_number =function(){
    let mark1=85;
    let mark2=70;
    return (mark1>mark2)?(`${mark1} IT IS A MAXIMUM NUMBER`):(`${mark2} IT IS A MAXIMUM NUMBER`);
 }
 console.log(max_number());

// Write a Function to Concatenate Strings

let Concatenate=function addstring(){
    let message1="Welcome";
    let message2=" ";
    let message3="To VTS";
    return( message1 + message2 + message3);
}
console.log(Concatenate());

// Write a Function to Calculate Factorial

function Factorial(){
    let fact_number=5;
    let value=1
    for(i=fact_number;i>=1;i--){
        value=value*i
        
    }
    return value;
}
console.log(Factorial());

// Write a Function to Reverse a String.

let reverse_string= ()=>{
    let names="hsegoy";
    let Reverse='';
    for(i=names.length-1;i>=0;i--){
        Reverse=Reverse+names[i];
        // console.log(Reverse);
    }
    return(Reverse)
}
console.log(reverse_string());

// Write a Function to Find the Length of an Array

let array_length=()=>{
    let Array=[20,50,"king",70,"Think","Error"];
    return Array.length;
}
console.log(array_length());

// Write a Function to Convert Celsius to Fahrenheit

const Celsius_toFahrenheit=()=>{
    let Celsius=40;
    let Fahrenheit=(Celsius*9/5)+32;
    return Fahrenheit;
}
console.log(Celsius_toFahrenheit());

// Write a Function to Filter Even Numbers from an Array

const filterEvenNumbers = () => {
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumbers = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 0) {
            evenNumbers=evenNumbers+myArray[i];
        }
    }
    return evenNumbers;
};
console.log(filterEvenNumbers());







 



