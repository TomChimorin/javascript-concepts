// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function add(x, y){
    let result = x + y;
}
function subtract(x, y){
    let result = x - y;
}
function multiply(x, y){
    let result = x * y;
}
function divide(x, y){
    let result = x / y;
}
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Tom@fake.com"));