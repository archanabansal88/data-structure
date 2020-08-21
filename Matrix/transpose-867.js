/**
 * https://leetcode.com/problems/transpose-matrix/
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let matrix = [];
    const row = A.length;
    const column = A[0].length;

    for(let i=0; i<A[0].length; i++){
        matrix.push([]);
        for(let j=0; j<A.length; j++){
           matrix[i].push(0);
        }
    }

    for(let r=0; r<row; r++){
        for(let c=0; c<column; c++){
            matrix[c][r] = A[r][c];
        }
    }

    return matrix;
};

console.log(transpose([[1,2,3],[4,5,6]]));
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));