class FeedbackBox<T>{
    private items:T[]=[];
    addItem(item:T):void{
        this.items.push(item);
    }
    getAll():T[]{
        return this.items;
    }
}
const stringFeedback = new FeedbackBox<string>();
stringFeedback.addItem("Great service!");
stringFeedback.addItem("Loved it!");
console.log("String feedback:", stringFeedback.getAll());

function getFirstItem<T>(arr:T[]):T|undefined{
    return arr[0];
}
const names=["Alice","Bob"];
const firstName=getFirstItem(names);
console.log("First name:" + firstName);