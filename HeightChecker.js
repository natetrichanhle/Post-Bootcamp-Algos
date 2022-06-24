heights = [1,1,4,2,1,3];


var heightChecker = function(heights) {
    let expected = [...heights];
    for(let i = 0; i < expected.length; i++){
        for(let j = i+1; j < expected.length; j++){
            if(expected[i] > expected[j]){
                temp = expected[i];
                expected[i] = expected[j];
                expected[j] = temp;
            }
        }
    }

    let noMatch = 0;
    for (let i = 0; i < heights.length; i++){
        if(heights[i] != expected[i]){
            noMatch++;
        }
    }
    return noMatch;
};

console.log(heightChecker(heights));