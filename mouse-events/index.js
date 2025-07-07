// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback or anonymous function or arrow functions);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.target.style.backgroundColor = "tomato";
    myBox.target.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", event => {
    myBox.target.style.backgroundColor = "yellow";
    myBox.target.textContent = "Don't do it";
})

myButton.addEventListener("mouseout", event => {
    myBox.target.style.backgroundColor = "lightblue";
    myBox.target.textContent = "Click Me";
})
