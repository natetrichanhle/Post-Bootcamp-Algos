var validMountainArray = function(arr) {
    if (arr.length < 3){
        return false;
    } else {
        let maxElementIndex = 0;
        // find max
        for (let i = 1; i < arr.length; i++){
            if(arr[i] >= arr[maxElementIndex]){
                maxElementIndex = i;
            }
        }
        // check whether max element is not the first or last element
        if(maxElementIndex === arr.length-1 || maxElementIndex === 0){
            return false;
        }
        let isMountainArray = true;
        // check whether elements before the largest element are in increasing order
        for (let j = 0; j < maxElementIndex; j++){
            if (arr[j] >= arr[j+1]){
                isMountainArray = false;
            }
        }
        // check whether elemtns after the greatest element in decreasing order
        for (let k = maxElementIndex; k < arr.length-1; k++){
            if(arr[k] <= arr[k+1]){
                isMountainArray = false;
            }
        }
        return isMountainArray;
    }
};