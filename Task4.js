function roundMe(...numbers) {

    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.round(numbers[0]);
    }

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.round(numbers[i]));
    }

    return result;
}

console.log(roundMe());
console.log(roundMe(4.7));
console.log(roundMe(4.7, 4.4));
console.log(roundMe(2.3, 5.8, 7.1));