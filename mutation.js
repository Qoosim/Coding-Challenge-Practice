function mutation(arr) {
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) === -1) return false;
    }
    return true;
}

console.log(mutation(['hello', 'hey']));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
