//create person class
class Person {
    //constructor method that creates Person with name, job, and age properties
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    //method that logs a message about exercise
    exercise(){
        console.log("Running is fun! - said no one ever");
    }
    //gets job of person and logs string of name and job
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}
//programmer inherits person
class Programmer extends Person {
    //constructor that creates a programmer with properties: name, job, age, and languages
    constructor(name, job, age, languages) {
        super(name, job, age);//takes the constructor from the parent(Person)
        this.languages = languages || [];//sets languages to languages or an empty array
        this.busy = true; //defaults busy to true and doesn't pass through to create a programmer
    }
    //complete task method that sets busy to false
    completeTask(){
        this.busy = false;
    }
    //accept new task method that sets busy to true
    acceptNewTask(){
        this.busy = true;
    }
    //offerNewTask method that if busy is true say person can't take task
    //else person can take the task
    offerNewTask(){
        if(this.busy === true){
            console.log(`${this.name} cannot accept any new tasks right now`);
        }else {
            console.log(`${this.name} would love to take on a new responsibility`);
        }
    }
    //pushes new language to the languages array
    learnLanguage(newLanguage){
        this.languages.push(newLanguage);
    }
    //displays languages by turning into string and adding commas
    listLanguages() {
        return this.languages.join(", ");
}
}

//create new person
const person1 = new Person("Harold", "Backend Engineer", 20);
//create new programmer
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
c3.completeTask();
c3.offerNewTask();
c3.acceptNewTask();
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob()
