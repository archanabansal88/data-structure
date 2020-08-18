/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
    if(s.length === 0){
        return true;
    }
    if(s.length === 1){
        return false;
    }
    var obj = {'(':')','{':'}','[':']'};
    var arr = [];
    for(var i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] ==='{' || s[i] === '['){
            arr.push(s[i]);
        }else if(s[i] === ')' || s[i] ==='}' || s[i] ===']'){
            let temp = arr.pop();
            if(obj[temp] !== s[i]){
                return false;
            }
        }
    }
    return !arr.length;
};
