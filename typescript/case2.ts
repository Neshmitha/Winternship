//favourite fruit
let fruit:string="Mango";
console.log("My favourite fruit is: " + fruit);

//function to print double of a value
function double(x:number){
    console.log(2*x);
}
double(5);

//class with a method
class Person{
    sayHello():void{
        console.log("hello..!!");
    }
}
let obj=new Person();
obj.sayHello();