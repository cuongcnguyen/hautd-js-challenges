function countVowel(str){
    let numOfVowels = 0;
    for (let char of str) {
        if ((/^[aeiou]$/i).test(char)){
            numOfVowels +=1;
        }
    }
    return numOfVowels;
}

console.log(countVowel('This is a test string ok hello uiuiuiuiui'));