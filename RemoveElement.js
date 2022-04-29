var removeElement = function(nums, val) {
    let count = nums.length;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == val){
            count--;
            nums.splice(i,1);
            i--;
        }
    }
    return count;
};