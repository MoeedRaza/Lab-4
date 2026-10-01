function absMe(...numbers) {

    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.abs(numbers[0]);
    }

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.abs(numbers[i]));
    }

    return result;
}

function ceilMe(...numbers) {

    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.ceil(numbers[0]);
    }

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.ceil(numbers[i]));
    }

    return result;
}

function floorMe(...numbers) {

    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.floor(numbers[0]);
    }

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.floor(numbers[i]));
    }

    return result;
}

console.log("abs:-");
console.log(absMe());
console.log(absMe(-5));
console.log(absMe(-5, 7, -9) + "\n");

console.log("ceil:-");
console.log(ceilMe());
console.log(ceilMe(4.2));
console.log(ceilMe(4.2, 6.7, 9.1) + "\n");

console.log("floor:-");
console.log(floorMe());
console.log(floorMe(4.9));
console.log(floorMe(4.9, 6.3, 9.8));