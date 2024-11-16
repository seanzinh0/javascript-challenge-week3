class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise(){
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages || [];
        this.busy = true;
    }

    completeTask(){
        this.busy = false;
    }

    acceptNewTask(){
        this.busy = true;
    }

    offerNewTask(){
        if(this.busy === true){
            console.log(`${this.name} cannot accept any new tasks right now`);
        }else {
            console.log(`${this.name} would love to take on a new responsibility`);
        }
    }

    learnLanguage(newLanguage){
        this.languages.push(newLanguage);
    }

    listLanguages() {
        return this.languages.join(", ");
}
}

const person1 = new Person("Harold", "Backend Engineer", 20);
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
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob()
