function bouncer1(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function bouncer2(arr) {
    return arr.filter(function(value) {
        if (value) {
            return value;
        }
    })
}

function bouncer3(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer1([7, 'ate', '', false, 9]));
console.log(bouncer2(["a", "b", "c", null, 0.0]));
console.log(bouncer2([false, null, 0, NaN, undefined, ""]));
console.log(bouncer3([null, NaN, 1, 2, undefined]));
