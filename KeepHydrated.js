function litres(time) {
    if (time > 0) {
        return Math.trunc(time * 0.5);
    } else {
        return 0;
    }
}