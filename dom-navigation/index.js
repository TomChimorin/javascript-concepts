// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

 // ------------- .firstElementChild ------------

 const element = document.getElementById("fruits");
 const firstChild = element.firstElementChild;
 firstChild.style.backgroundColor = "yellow";

 const ulElements = document.querySelectorAll("ul");

 ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
 })

// ------------- .lastElementChild ------------

const element2 = document.getElementById("fruits");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements2 = document.querySelectorAll("ul");

ulElements.forEach(ulELement => {
const lastChild = ulElement.lastElementChild;
lastChild.style.backgroundColor = "yellow";
})

// ------------- .nextElementSibling ------------

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ------------- .previousElementSibling ------------

const element4 = document.getElementById("orange");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ------------- .parentElement ------------

const element5 = document.getElementById("apple");
const parent = element5.parentElement;
parent.statusbar.backgroundColor = "yellow";

// ------------- .children ------------

const element6 = document.getElementById("fruits");
const children = element6.children;

children[1].style.backgroundColor = "yellow";

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})