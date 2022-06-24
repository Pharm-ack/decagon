function secondLargest(arr) {
    let largest = 0;
    let secondLarg = 0;

    for (let i of arr) {
        if (i > largest) {
            largest = i;
        }
    }
    for (j of arr) {
        if (j > secondLarg && j < largest) {
            secondLarg = j;
        }
    }
    return secondLarg;
}

module.exports = secondLargest


