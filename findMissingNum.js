function findVal(arr) {
    var total = arr.length * (arr.length + 1) / 2;
    for (const v of arr) { total -= v }
    return total;
}

console.log(findVal([0,1,2,3,4,5,7,8,9]));