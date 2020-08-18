/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    let arr = new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        let j = s.charCodeAt(i) - 97;
        arr[j] = arr[j] +1;
    }
    for(let i=0; i<s.length; i++){
        let j = s.charCodeAt(i) - 97;
        if(arr[j] === 1){
            return i;
        }
    }
    return -1;  
};

firstUniqChar("loveleetcode");
