function sharePizza(numSlices, evenOddSlices){
    let slicePerPerson = numSlices / evenOddSlices; //calculates slice per person
    slicePerPerson = Math.round(slicePerPerson * 100) / 100;//rounds to two decimal points
    //string that displays slices per person and num slices in the pizza
    return `Each person gets ${slicePerPerson} slice of pizza; from our ${numSlices} slice pizza.`;
}

console.log(sharePizza(8, 2))
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));