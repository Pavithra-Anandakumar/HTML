/*Write a Javascript program to compute the sum and product of array of integer?  */

function compute(arr) {
    let sum = 0;
    let product = 1;

    for (let num of arr) {
        sum += num;
        product *= num;
    }

    return { sum: sum, product: product };
}

let integers = [1, 2, 3, 4, 5];

let result = compute  (integers);

console.log("Sum:", result.sum);
console.log("Product:", result.product);
