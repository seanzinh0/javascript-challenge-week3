function exercise(exercises) {
    return function(){
        console.log("Today's exercise: " +  exercises);
    }
}

const running = exercise("Running");
running();

const swimming = exercise("Swimming");
swimming();

const dancing = exercise("Dancing");
dancing();

const fencing = exercise("Fencing");
fencing();