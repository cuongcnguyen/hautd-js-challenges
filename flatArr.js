function flattenArr(arr) {
    let finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            finalArr = finalArr.concat(flattenArr(arr[i]));
        } else {
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

console.log(flattenArr([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));