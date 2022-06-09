nums = [1,2];

var thirdMax = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    let newArr = [...new Set(nums)]
    console.log(newArr)
    let maximums = [];
    for (let i = newArr.length-1; i >= 0; i--){
        if (maximums.length < 3) {
            maximums.push(newArr[newArr.length-1]);
            newArr.pop();
        }
    }
    console.log(maximums)
    if (maximums.length < 3) {
        return maximums[0];
    } else {
        return maximums[maximums.length-1];
    }
};

console.log(thirdMax(nums));