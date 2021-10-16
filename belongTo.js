function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([40, 45, 48, 60], 50));
console.log(getIndexToIns([3, 4, 8, 6], 3));
console.log(getIndexToIns([4, 4, 8, 0], 6));
