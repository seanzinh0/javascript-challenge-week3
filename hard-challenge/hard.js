//function that creates a PII object using closure
function createPII(name, ssn) {
    //create PII object with properties: ssn, name
    const PII= {
        name: name,
        ssn: ssn
    };
    //return object with methods that access PII
    //closure allows access to name and ssn after createPII is executed
   return {
       //getName method returns PII.name
       getName: function () {
           return PII.name;
       },
       //don't allow access to SSN
       getSSN: function () {
           return "NO ACCESS";
       }
   }
}

//create new PII object called user
const user = createPII("sean", "222-22-2222");

//user name and ssn are not accessible using dot notation
console.log(user.name);
console.log(user.ssn);
//only allow if using getter methods
console.log(user.getName());
console.log(user.getSSN());

const patient2 = createPII("John", "123-45-6789");
console.log(patient2.name);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());