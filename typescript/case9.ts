type CustomerID=string;

type Customer={
    id:CustomerID;
    name:string;
    email?:string;
};
let customer:Customer={id:"C123",name:"Alice"};

type OrderStatus="pending"|"shipped"|"returned";
type OrderCallBack=(status: OrderStatus)=>void;
const processOrder:OrderCallBack=status=>{
    console.log(`order is now ${status}`);
};
processOrder("pending");

type Container<T> = { value: T; timestamp: Date };
let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};
console.log(customerContainer);