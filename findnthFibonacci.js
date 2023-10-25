function findnthFibonacciNum(nth){
    if(nth <2) {
        return nth;
    } else return findnthFibonacciNum(nth-1) + findnthFibonacciNum(nth-2);
}

console.log(findnthFibonacciNum(14));