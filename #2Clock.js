function past(h, m, s) {
    let result = 0;
    if (h) {
        result += 3600000;
    }
    if (m) {
        result += 60000;
    }
    if (s) {
        result += 1000;
    }
    return result;
}