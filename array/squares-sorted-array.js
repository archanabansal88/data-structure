/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let arr = [];
    let i = 0;
    let j = A.length-1;
    while(i <= j){
        let start = Math.pow(A[i],2);
        let end = Math.pow(A[j],2);
        if(start < end){
            arr.unshift(end);
            j--;
        }else{
            arr.unshift(start);
            i++;
        }        
    }
    return arr;   
};