function processTransaction(
    amount:number,
    description?:string,
    isCredit:boolean=true
):void{
    //never type
    if(amount<0){
        throw new Error("Amount cannot be negative");
    }
    //handling missing description
    if(!description){
        description="no description provided";
    }
    console.log(`Transaction Summary:
        Amount: ${amount}
        Type: ${isCredit?"credit":"Debit"}
        Description: ${description}`);
}
processTransaction(100,"Salary",true);
processTransaction(50,undefined,false);