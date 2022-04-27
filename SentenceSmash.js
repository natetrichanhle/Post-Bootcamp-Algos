function smash(words) {
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[words.length - 1]) {
            result += words[i];
        } else {
            result += words[i] + " ";
        }
    }
    return result;
};