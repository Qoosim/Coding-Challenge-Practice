const titleCase = str => {
    const splittedStr = str.toLowerCase().split(' ');
    let final = [];
    for (let i = 0; i < splittedStr.length; i++) {
        let firstLetter = splittedStr[i][0].toUpperCase();
        let capitalized = splittedStr[i].replace(splittedStr[i][0], firstLetter);
        final.push(capitalized);
    }
    return final.join(' ');
}

console.log(titleCase('I\'m a little tea pot'));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
