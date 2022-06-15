var lastStoneWeight = (stones) => {
    if (stones.length == 1) {
        return stones[0];
    }

    while (stones.length > 1) {
        const x = Math.max(...stones);
        let xIndex = stones.splice(stones.indexOf(x), 1);
        const y = Math.max(...stones);
        let yIndex = stones.splice(stones.indexOf(y), 1);
        if (x !== y) {
            stones.push(x - y);
        }
    }
    return stones.length === 0 ? 0 : stones[0]
}