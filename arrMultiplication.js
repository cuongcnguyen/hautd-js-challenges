function arrMultiplication(arr){
    let product = 1;
    for (let element of arr) {
        product *= element;
    }
    return product;
}

console.log(arrMultiplication([1,2,3,5,7]));