/**
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let row = [];
    let column = [];
    let obj = {};
    let output = [];
    
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            row[i] = Math.min(row[i] || Number.MAX_VALUE, matrix[i][j]);
            column[j] = Math.max(column[j] || Number.MIN_VALUE,matrix[i][j]);
        }
    }
    
    for(let i=0; i<row.length; i++){
        for(let j=0; j<column.length; j++){
            if(column[j] === row[i]){
                output.push(column[j]);
            }
        }
     }
    
    return output;
    
};

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));