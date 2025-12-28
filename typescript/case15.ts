type Instructor={
    name:string;
    subject:string;
}
type Admin={
    name:string;
    department:string;
}
type InstructorOrAdmin=Instructor|Admin;
type Assignment={
    title:string;
    dueDate:Date;
    points:number;
}
type ReadOnlyAssignment=Readonly<Assignment>;
type LearnerStats={
    quizzes:number;
    videos:number;
    assignments:number;
}
type StatsAsStrings={
    [K in keyof LearnerStats]:string;
}