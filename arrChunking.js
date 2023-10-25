function arrChunking (arr, chunkSize){
    const finalArr = [];
    for(let i =0; i<arr.length; i+=chunkSize){
        const chunkedArr = arr.slice(i , i+chunkSize);
        finalArr.push(chunkedArr);
    }
    return finalArr;
}

console.log(arrChunking(['a','b','c','d','e'], 3));