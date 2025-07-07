// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [{}, {}, {}]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]`
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}]`

// const jsonString = JSON.stringify(names);
// const jsonString2 = JSON.stringify(person);
// const jsonString3 = JSON.stringify(people);


// console.log(jsonString3)

const parsedData = JSON.parse(jsonNames);
const parsedData2 = JSON.parse(jsonPerson);
const parsedData3 = JSON.parse(jsonPeople);

console.log(parsedData)

fetch("person.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));

