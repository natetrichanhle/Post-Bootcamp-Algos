nums = [4,3,2,7,8,2,3,1];

var findDisappearedNumbers = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++){
        set.add(i + 1);
    }
    for (const num of nums) {
        set.delete(num);
    }
    return [...set];
};

console.log(findDisappearedNumbers(nums));