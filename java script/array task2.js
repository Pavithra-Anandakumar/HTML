//Write a JavaScript function to convert a string into camel case
//Test Data: console.log(camelize("JavaScript Excercises"))

function camel(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return string;
    }

    let words = string.toLowerCase().split(' ');

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

let str = "JavaScript Exercises";
let camelCase = camel(str);

console.log(str);
console.log(camelCase);
