function countOccurance(arr, k){
    let counter = 0;
    for(let element of arr){
        if(element === k){
            counter += 1;
        }
    }
    return counter;
}

console.log(countOccurance([5, 5, 5, 2, 2, 2, 2, 2, 9, 4], 5));