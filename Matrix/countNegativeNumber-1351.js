/**
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
let countNegatives = function(grid) {
    let count = 0;
    let j = grid[0].length - 1;
    let i = 0;
    
    while(j >=0 && i < grid.length){
        if(grid[i][j] < 0){
            count = count + grid.length - i
            j--;
        }else{
            i++;
        }
    }
    return count;
};

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]);