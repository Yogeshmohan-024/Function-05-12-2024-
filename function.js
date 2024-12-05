// CalculateArea Radius

const calculatearea=(radius=60)=>{ 
    const pi=3.14;
    const area=pi*radius*radius;
    return area;
}
console.log(calculatearea());

// Arrow function

const isEven=(number)=>{
    return(number % 2 == 0)
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
