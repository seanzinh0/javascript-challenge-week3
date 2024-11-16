function exercise() {
    return function(exerciseName){
        return "Today's exercise: " +  exerciseName;
    }
}

let displayExercise = exercise();

console.log(displayExercise("Running"));
console.log(displayExercise("Swimming"));
console.log(displayExercise("Dancing"));
console.log(displayExercise("Fencing"));

console.log(exercise()("Jiu-Jitsu"));
console.log(exercise()("Muay Thai"));