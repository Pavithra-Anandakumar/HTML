//Write a javascript program: for loop that iterates from 1to15. for each iteration it checks if the current number
//is odd or even and display a message on the screen
let x;
for(x=0;x<=15;x++){
    if(x%2==0){
        console.log(x,"Number is Even")
    }
    else if(x%2==1){
        console.log(x,"Number is Odd")
    }
    else{
        console.log("Invalid")
    }
}