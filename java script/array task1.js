/*Write a Javascript function to capitalize the first letter of a string*/
function upper(string){
    if(typeof string !== 'string'|| string.length==0){
        return string
    }
    return string.charAt(0).toUpperCase()+string.slice(1)
}
let name1 = "pavithra";
let name2 = "john";
let name3 = "jenni";

let upper1=upper(name1)
let upper2=upper(name2)
let upper3=upper(name3)


console.log(name1);  
console.log(upper1);  
console.log(name2);  
console.log(upper2);  
console.log(name3);  
console.log(upper3);  
