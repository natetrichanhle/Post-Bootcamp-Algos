// Sum Numbers
function sum(numbers) {
    if (numbers.length == 0) {
        return 0;
    }

    let arraySum = 0;
    for (let i = 0; i < numbers.length; i++) {
        arraySum += numbers[i];
    }
    return arraySum;
};