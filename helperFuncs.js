const { MathError } = require('./mathError');

function turnNumsToArr(nums) {
    let numArr = nums.split(',');
    numArr = numArr.map(val => {
        if (isNaN(+val)) nanValue = val;
        return +val;
    })

    checkForInvalidNum(numArr);
    return numArr
}

function checkForInvalidNum(nums) {
    const nanIdx = nums.findIndex(val => {
        return (isNaN(val));
    })
    if (nanIdx !== -1 ) throw new MathError(`${nanValue} is not a number`, 400);
    
}

module.exports = {
    turnNumsToArr,
    checkForInvalidNum
}