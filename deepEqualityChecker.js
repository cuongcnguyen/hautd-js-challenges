function deepEqualityChecker(obj1, obj2){
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
        return true;
    } else return false;
}

console.log(deepEqualityChecker(
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 35
    },{
        "firstName": "John",
        "lastName": "Doe",
        "age": 35
    }
));