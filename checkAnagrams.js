function checkAnagrams(str1, str2){
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    if (sortedStr1 === sortedStr2){
        return true;
    } else return false;

}
console.log(checkAnagrams('iceman','cinemaa'));