/**
 * https://leetcode.com/problems/toeplitz-matrix/
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const rowLen = matrix.length;
    const columnLen = matrix[0].length;

    for(let i=0; i<rowLen; i++){
        for(let j=0; j<columnLen; j++){
            if(i+1 < rowLen && j+1 < columnLen && (matrix[i][j] !== matrix[i+1][j+1])){
                return false;
            }
        }
    }
    return true;
};

console.log(isToeplitzMatrix([
    [1,2],
    [2,2]
  ]));