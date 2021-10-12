function booWoo1(bool) {
    if (bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}

function booWoo2(bool) {
    return (typeof bool === 'boolean');
}

console.log(booWoo1('null'));
console.log(booWoo1(null));
console.log(booWoo1(true));
console.log(booWoo1(false));
console.log(booWoo1([1, 2, 3, 4]));
console.log(booWoo1(1));
console.log(booWoo1('1'));
console.log(booWoo1(NaN));

console.log('==========')

console.log(booWoo2(3));
console.log(booWoo2('hello'));
console.log(booWoo2(Number));
console.log(booWoo2([4, 4, 2, 1]));
console.log(booWoo2(true));
console.log(booWoo2(false));
