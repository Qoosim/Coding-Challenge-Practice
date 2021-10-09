const truncateString = (str, num) => {
    let truncate = '';
    if (str.length > num) {
        truncate += str.slice(0, num) + '...';
    } else {
        truncate += str.slice(0, num);
    }
    return truncate;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
