const func = num => num % 2 === 0; 

const findElement = (arr, func) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            num = arr[i];
            break;
        } else {
            num = undefined;
        }
    }
    return num;
}

console.log(findElement([1, 3, 5, 8, 11, 12], func));
console.log(findElement([1, 3, 5, 9], func));
