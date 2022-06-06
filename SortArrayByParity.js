nums = [3,1,2,4];

var sortArrayByParity = function(nums) {
    let evens = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 == 0){
            evens.push(nums[i]);
            nums.splice(i,1);
            i--;
        }
    }
    console.log(evens)
    let resultArr = evens.concat(nums)
    return resultArr;
};

console.log(sortArrayByParity(nums));