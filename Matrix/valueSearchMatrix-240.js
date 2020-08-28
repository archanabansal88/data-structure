/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    if(matrix.length === 0){
        return false;
    }
    let i = 0;
    let j = matrix[0].length - 1;
    
    while(j >= 0 && i<matrix.length){
        if(matrix[i][j] === target){
            return true;
        }else if(matrix[i][j] > target){
            j--;
        }else{
            i++;
        }
    }
    return false;
    
};

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)