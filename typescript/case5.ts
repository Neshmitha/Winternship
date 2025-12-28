let answers:any={};
function recordAnswer(qsnID:string,answer:any):void{
    answers[qsnID]=answer;
}
recordAnswer("Q1","Typescript is fun");
recordAnswer("Q2",100);
recordAnswer("Q3",['apple','banana','mango']);
console.log(answers);