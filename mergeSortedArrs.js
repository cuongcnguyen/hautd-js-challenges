function mergeSortedArrs(arr1, arr2){
    for (let element of arr2) {
        arr1.push(element);
    }
    let temp;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if(arr1[i]<arr1[j])
            {
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
        
    }
    return arr1;
}
console.log(mergeSortedArrs([1,2,3,5,9],[4,6,7,8]));