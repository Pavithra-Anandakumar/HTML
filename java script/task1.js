//Write a Javascript conditional statement to swap 3numbers, display using alert box.
//Sample input= 0 -1 4
//Sample output= 4 0 -1

let a=0
let b=-1
let c=4
alert("Swapping of 3numbers:"+" "+a+" "+" "+b+" "+" "+c)
if(a>b){
    let swap=a
    a=b
    b=swap
}
if(b>c){
    let swap=b
    b=c
    c=swap
}
if(c>a){
    let swap=c
    c=a
    a=swap
}
alert("Swapped numbers:"+" "+a+" "+" "+b+" "+" "+c)