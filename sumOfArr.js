function sumOfArr(arr){
    let sum =0;
    for (let element of arr){
        sum+= element;
    }
    return sum;
}

console.log(sumOfArr([1,2,3,4,5,6,5,4,3,1]));
