function createPII(name, ssn) {
    const PII= {
        name: name,
        ssn: ssn
    };

   return {
       getName: function () {
           return PII.name;
       },
       getSSN: function () {
           return "NO ACCESS";
       }
   }
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