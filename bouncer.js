function bouncer(arr) {
    const newArr = arr.filter(function(elem) {
        if (elem) {
            return elem;
        }
    });
    return newArr;
}

console.log(bouncer([7, 'ate', '', false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
