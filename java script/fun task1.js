/* Write a java script program that computes the avg of marks of the following students. This average marks is 
used to determine the corresponding grade. Student names and marks:
David 80
Vinoth 77
Divya 88
Ishitha 95
Thomas 90
Range Grade:
<60 F
<70 D
<80 C
<90 B
<100 A*/
function avg(student){
    if(student==="David"){
        return("Mark:80, Grade=D")
    }
    else if(student==="Vinoth"){
        return("Mark=77, Grade= C")
    }
    else if(student==="Divya"){
        return("Mark=88, Grade= B")
    }
    else if(student==="Ishitha"){
        return("Mark=95, Grade= A")
    }
    else if(student==="Thomas"){
        return("Mark=90, Grade= C")
    }
}
let student=prompt("Enter the student name")
let grade=avg(student)
console.log(grade)
