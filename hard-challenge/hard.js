function createPII(name, ssn) {
    let privateName = name;
    let privateSSN = ssn;

    const PII= {
        getName: function() {
            return privateName;
        },
        getSSN: function() {
            return "NO ACCESS";
        }
    };

    return PII;
}

const user = createPII("sean", "222-22-2222");

console.log(user.name);
console.log(user.ssn);
console.log(user.getName());
console.log(user.getSSN());

const patient2 = createPII("John", "123-45-6789");
console.log(patient2.name);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());