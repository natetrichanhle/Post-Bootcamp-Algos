var replaceElements = function(arr) {
    if(arr.length == 1){
        arr[0] = -1;
        return arr;
    }
    
    let maxVal = -1;
    
    for (let i = arr.length - 1; i >= 0; i--){
        let currVal = arr[i];
        arr[i] = maxVal;
        if(currVal > maxVal){
            maxVal = currVal;
        }
    }
    return arr;
};