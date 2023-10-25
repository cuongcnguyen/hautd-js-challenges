function deepCloneObj(obj){
    let deepclonedObj = JSON.parse(JSON.stringify(obj));
    return deepclonedObj;
}

console.log(deepCloneObj(
    {
        string: 'string',
        number: 123,
        bool: false,
        nul: null
    }));