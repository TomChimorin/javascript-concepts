// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback);

// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", event => {
//     myBox.textContent = "WOOF";
//     myBox.style.backgroundColor = "tomato";
//     console.log(`Key down = ${event.key}`);
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "MEOW";
//     myBox.style.backgroundColor = "lightblue";
//     console.log(`Key up = ${event.key}`);
// });

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    console.log(event.key)
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})