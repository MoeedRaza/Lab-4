function createNumber(nums) {

    return "(" +
        nums[9] +
        nums[8] +
        nums[7] +
        ") " +
        nums[6] +
        nums[5] +
        nums[4] +
        "-" +
        nums[3] +
        nums[2] +
        nums[1] +
        nums[0];
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(createNumber(nums));