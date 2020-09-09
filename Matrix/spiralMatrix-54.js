/**
 * https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */

let spiralOrder = function(matrix) {
    let arr = [];
    if(matrix.length === 0){
        return arr;
    }
    let rowBegin = 0;
    let rowEnd = matrix.length-1;
    let columnBegin = 0;
    let columnEnd = matrix[0].length-1;
    
    while(rowBegin <= rowEnd && columnBegin <= columnEnd){
        
        for(var i= columnBegin; i<= columnEnd; i++){
            arr.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        
        for(var i= rowBegin; i<= rowEnd; i++){
            arr.push(matrix[i][columnEnd]);
        }
        columnEnd--;
        
        if(rowBegin <= rowEnd){
            for(var i= columnEnd; i>= columnBegin; i--){
                arr.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        
        if(columnBegin <= columnEnd){
            for(var i= rowEnd; i>= rowBegin; i--){
                arr.push(matrix[i][columnBegin]);
            }
        }
        columnBegin++;
    }
    return arr;
    
};


// console.log(spiralOrder([
//     [4,3,2,1,7,0,6],
//     [5,6,8,2,0,1,9],
//     [1,3,5,7,9,2,1],
//     [8,6,4,2,1,7,2],
//     [1,2,3,4,5,3,0],
//     [9,8,7,6,4,3,2],
//     [1,4,2,1,5,0,9]]));

// console.log(spiralOrder([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9,10,11,12]
//       ]))