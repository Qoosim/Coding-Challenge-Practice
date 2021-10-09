const repeatStr = (str, times) => {
    let repeat = '';
    while(times > 0) {
        repeat += str;
        times--;
    }
    return repeat;
}

console.log(repeatStr('abc', 5));
console.log(repeatStr('alaje', 3));
console.log(repeatStr('Abeke', 3));
console.log(repeatStr('Oriola', 5));
console.log(repeatStr('', 5));
console.log(repeatStr('Adekunle', 0));
