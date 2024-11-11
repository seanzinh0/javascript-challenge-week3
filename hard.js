class PII {
    #name = null;
    #ssn = null;

    constructor(name, ssn) {
        this.#name = name;
        this.#ssn = ssn;
    }

    getName(){
        return this.#name;
    }

    getSSN(){
        return this.#ssn;
    }
}

const user = new PII("sean", "222-22-2222");

console.log(user.name);
console.log(user.ssn);
console.log(user.getName());
console.log(user.getSSN());