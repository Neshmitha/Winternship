//define an enum
enum Role {Doctor,Nurse,Admin}

//create an interface
interface Staff{
    id:number;
    name:string;
    role:Role;
}

//array of staff members
let staff:Staff[]=[
    {id:1,name:"Alice",role:Role.Doctor},
    {id:2,name:"Bob",role:Role.Admin}
];

//write a function
function summary(staff:Staff[]):void{
    console.log(`Staff Summary:`);
    staff.forEach(member=>
        console.log(`ID: ${member.id}, Name: ${member.name}, Role: ${Role[member.role]}`)
    )
};

summary(staff);