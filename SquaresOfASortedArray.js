// nums = [-4,-1,0,3,10]
nums = [-7,-3,2,3,11]

var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] *= nums[i];
    }
    return nums.sort((a,b) => {return a-b})
};

console.log(sortedSquares(nums))