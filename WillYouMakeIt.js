const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (fuelLeft * mpg >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};