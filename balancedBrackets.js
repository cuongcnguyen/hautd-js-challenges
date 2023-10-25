const bracketPairs = { '[':']', '{':'}', '(':')' };                              
const closingBrackets = new Set(Object.values(bracketPairs));

function isBalancedBrackets(txt){
    const open = [] // stack of (closing) brackets that need to be closed                       
    for (char of txt) {                                                        
        if (closingBrackets.has(char)) {                                        
            if (char === open[open.length-1]) open.pop()                        
            else return false;                                                  
        }                                                                       
        if (char in bracketPairs) open.push(bracketPairs[char])                 
    }                                                                           
    return open.length === 0
}                                                                                                                                                                           
console.log(isBalancedBrackets('(hi)there'));