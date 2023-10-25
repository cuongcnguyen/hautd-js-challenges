function secondLargestInt(arr){
    let largestInt = -Infinity;
    let secondLargestInt = -Infinity;

    for (let num of arr) {
        if(num > largestInt){
            secondLargestInt = largestInt;
            largestInt = num;            
        }
        if(arr.length <2 ){
            return 'There is no second largest int';
        }
    }
    return secondLargestInt;
}

console.log(secondLargestInt([20]));