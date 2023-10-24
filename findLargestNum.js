function findLargestNum(arr) {
    let largestNumber = 0;
    for (let number of arr) {
        if(number > largestNumber){
            largestNumber = number;
        }
    }
    return largestNumber;
}

console.log(findLargestNum([2,4,6,8,12,67,529,54,42,30]));