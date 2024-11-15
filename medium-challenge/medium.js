function sharePizza(numSlices, evenOddSlices){
    let slicePerPerson = numSlices / evenOddSlices;
    slicePerPerson = Math.round(slicePerPerson * 100) / 100;

    console.log(`Each person gets ${slicePerPerson} slice of pizza; from our ${numSlices} slice
     pizza.`);
}

sharePizza(8, 2);
sharePizza(8, 3);
sharePizza(21, 20);
sharePizza(10, 3);