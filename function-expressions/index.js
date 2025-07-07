// function declaration = define a reusable block of code
//                        that performs a specific task

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

const hello = function(){
    console.log("hellow");
}

setTimeout(function() {
    console.log("Goodbye");
}, 5000);