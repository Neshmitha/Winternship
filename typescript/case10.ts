//function 1
function checkSign(num:number):void{
    if(num>=0){
        console.log("Positive number");
    }else{
        console.log("Negative number");
    }
}

//function 2
function evenOrOdd(num:number):void{
    if(num%2===0){
        console.log("Even number");
    }else{
        console.log("Odd number");
    }
}

//function 3
function getGrade(score:number):string{
    if(score>=90) return "A";
    else if(score>=80) return "B";
    else if(score>=70) return "C";
    else if(score>=60) return "D";
    else return "F";
}

//function 4
function provideFeedback(grade:string):void{
    switch(grade){
        case "A": console.log("Excellent work!");break;
        case "B": console.log("Good job!");break;
        case "C": console.log("Fair effort");break;
        case "D": console.log("Needs improvement.");break;
        case "F": console.log("Failing grade, try harder.");break;
        default: console.log("Invalid grade");
    }
}

checkSign(10);
evenOrOdd(7);
const grade=getGrade(97);
console.log(`Grade: ${grade}`);
provideFeedback(grade);