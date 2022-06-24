function sumTwoSmallestNums(arr) {
    let first = Math.min(...arr)
    arr.splice(arr.indexOf(first), 1)
    let second = Math.min(...arr)
    return first + second;

}
 module.exports =sumTwoSmallestNums