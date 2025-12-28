class Content{
    protected title:string;
    protected published:boolean=false;
    constructor(title:string){
        this.title=title;
    }
    publish(){
        this.published=true;
    }
    getTitle():string{
        return this.title;
    };
    getType():string{
        return "Content";
    }
}
class Assignment extends Content{
    private dueDate:Date|null=null;
    constructor(title:string){
        super(title);
    }
    setDueDate(date: Date, isInstructor: boolean): void {
        if (!isInstructor) {
            console.log("Only instructors can set the due date.");
            return;
        }
        if (this.published) {
            console.log("Cannot set due date after publishing.");
            return;
        }
        this.dueDate = date;
        console.log("Due date set to:", this.dueDate.toDateString());
    }
    getDueDate(): Date | null {
        return this.dueDate;
    }
    getType(): string {
        return "Assignment";
    }
}
const assignment = new Assignment("Math Homework");
assignment.setDueDate(new Date("2025-12-31"), false); 
assignment.setDueDate(new Date("2025-12-31"), true);
assignment.publish();
assignment.setDueDate(new Date("2026-01-05"), true); 
console.log("Type:", assignment.getType()); 
console.log("Title:", assignment.getTitle());
console.log("Due date:", assignment.getDueDate()); 