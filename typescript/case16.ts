interface Observer{
    update(message:string):void;
}
class DrinkOrder{
    private observers:Observer[]=[];
    addObserver(observer:Observer){
        this.observers.push(observer);
    }
    private notify(message:string){
        for(let observer of this.observers){
            observer.update(message);
        }
    }
    serveDrink(drinkName:string){
        console.log("serving drink:" + drinkName);
        this.notify("Special offer: get 10% off " + drinkName);
    }
}
class PromotionSystem implements Observer {
    update(message: string) {
        console.log("PromotionSystem announcement:", message);
    }
}
const drinkOrder = new DrinkOrder();
const promotionSystem = new PromotionSystem();

drinkOrder.addObserver(promotionSystem);

drinkOrder.serveDrink("Coffee");
drinkOrder.serveDrink("Latte");