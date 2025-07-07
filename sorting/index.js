// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

const people = [{name: "spongebob", age: 30, gpa: 3.0}, {name: "patrick", age: 37, gpa: 1.5}, {name: "squidward", age: 51, gpa: 2.5}, {name: "sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);