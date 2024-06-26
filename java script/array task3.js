/*Write a javascript function to chop a string into chucks of a given length
test data:
console.log(string-chop('w3 resource'))
console.log(string-chop('w3 resource',2))
console.log(string-chop('w3 resource',3))
["w3 resource"]
["w3","re","so","ur","ce"]
["w3r","eso","urc","e"] */
function stringChop(str, chunkLength = 1) {
    if (typeof str !== 'string' || str.length === 0 || chunkLength <= 0) {
        return [];
    }

    let result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }

    return result;
}

console.log(stringChop('w3 resource'));
console.log(stringChop('w3 resource', 2));
console.log(stringChop('w3 resource', 3));
