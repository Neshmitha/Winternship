//function to display member details
type Member={
    name:string;
    email?:string;
};
function displayMember(member:Member):void{
    console.log("Name: " + member.name);
    if(member.email!==undefined){
        console.log("email: " + member.email);
    }else{
        console.log("Email not provided");
    }
}
const member1:Member={name:"Alice",email:"alice@example.com"};
const member2:Member={name:"Bob"};
displayMember(member1);
displayMember(member2);

//calculate sum of fines
function calculateFines(fines:number[]):number{
    let total=0;
    for(let i=0;i<fines.length;i++) total+=fines[i];
    return total;
}
console.log("Total fines:" + calculateFines([5,10,15,20]));

//membership fee
function membershipFee(amount:number,discount:number=0):number{
    return amount-(amount*discount)/100;
}
console.log("Membership fee (default discount): " + membershipFee(100));
console.log("Membership fee (20%): " + membershipFee(100,20));

//greetings function
function vipGreet(name:string):void{
    console.log("Welcome VIP " + name);
}
const consoleGreet=(name:string)=>console.log("Hello " + name);
vipGreet("Alice");
consoleGreet("Bob");

//factorial function
function factorial(n:number):number{
    if(n<=1) return 1;
    return n*factorial(n-1);
}
console.log("Factorial of 5: ",factorial(5));