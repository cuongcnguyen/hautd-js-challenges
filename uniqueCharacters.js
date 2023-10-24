function isUniqueCharacter(str){
    return new Set(str).size === str.length;
}

console.log(isUniqueCharacter('heo h'));