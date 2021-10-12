function frankenSplice(arr1, arr2, n) {
    // First Solution
    let copiedArr = arr2.slice();

    copiedArr.splice(n, 0, ...arr1)

    return copiedArr;
    /*
    // Second Solution
    let newArray2 = arr2.slice();

    arr1.forEach(arr => {
        newArray2.splice(n, 0, arr);
    })

    return newArray2;
    */
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
