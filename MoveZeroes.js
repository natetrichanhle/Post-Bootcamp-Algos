nums = [0,0,1,0]

var moveZeroes = function(nums) {
    let zeroes = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            nums.splice(i,1);
            zeroes++
            i--
        }
    }
    for(let i = 0; i < zeroes; i++){
        nums.push(0);
    }
    return nums;
};

console.log(moveZeroes(nums))