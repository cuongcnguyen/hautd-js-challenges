function removeDuplicates(arr){
    return arr.filter((item, pos, self) => {
        return self.findIndex((arr) => JSON.stringify(arr) === JSON.stringify(item)) === pos;
    });
}

console.log(removeDuplicates([[1,2,3], [4,5,6], [1,2,3]]));