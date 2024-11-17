//create a function using closure
function exercise() {
    //inner function that takes exerciseName as argument
    return function(exerciseName){
        //returns string with the exercise name
        return "Today's exercise: " +  exerciseName;
    }
}

//call exercise function that assigns the inner function to displayExercise
//closure
let displayExercise = exercise();

console.log(displayExercise("Running"));
console.log(displayExercise("Swimming"));
console.log(displayExercise("Dancing"));
console.log(displayExercise("Fencing"));

console.log(exercise()("Jiu-Jitsu"));
console.log(exercise()("Muay Thai"));