// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job = "unemployed"} = person1;

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)

}