//const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = Number(radius);

circumference = 2 * pi * radius;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").ariaValueMax;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
    
}