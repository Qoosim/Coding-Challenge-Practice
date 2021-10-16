const findLongestWordLength = str => {
    let theLongest = '';
    const splittedStr = str.split(' ');
    for (let i = 0; i < splittedStr.length; i++) {
        if (splittedStr[i].length > theLongest.length) {
            theLongest = splittedStr[i];
        }
    }
    return `${theLongest}: ${theLongest.length}`;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
