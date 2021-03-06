const { MathError } = require('./mathError');
const math = require('mathjs');

function turnNumsToArr(nums) {
    if (nums === undefined || nums === '') throw new MathError('Nums are required', 400 );

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

function makeRes(operation, req, res) {
    const nums = turnNumsToArr(req.query.nums);
    const value = operation !== math.mode ? math.round(operation(nums), 2) : operation(nums);

    const response = {
    operation: checkOperation(operation),
    value
    }
    return res.json({response});
}

function checkOperation(func) {
    if (func === math.mean) {
        return 'mean'
    } else if (func === math.median) {
        return 'median'
    } else {
        return 'mode'
    }
}

module.exports = {
    turnNumsToArr,
    checkForInvalidNum,
    makeRes,
    checkOperation
}