/* Using for loop iterate the integer 1 to 100 but, for multiples of 3-print: fizz. Instead of multiples of 5
print buzz. if the current number is both Multiples of 3 and 5, then print fizz buzz.*/
let x;
for(x=1;x<=100;x++){
    if(x%3==0){
        console.log(x,"fizz")
    }
    else if(x%5==0){
        console.log(x,"buzz")
    }
    else if(x%3==0 & x%5==0){
        console.log(x,"fizz buzz")
    }
    else{
        console.log(x)
    }
}