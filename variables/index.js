// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

let fullName = "Yu Zhao";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

