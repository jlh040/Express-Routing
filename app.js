const express = require('express');
const math = require('mathjs');
const MathError = require('./mathError');

const app = express();

function turnNumsToArr(nums) {
    const numArr = nums.split(',');
    numArr = numArr.map(val => {
        return +val;
    })

    checkForInvalidNum(numArr);
    return numArr
}

function checkForInvalidNum(nums) {
    const invalidVal = nums.find(val => {
        return (typeof val == 'NaN');
    })
    if (invalidVal || invalidVal === '') throw MathError(`${invalidVal} is not a number`, 400);
}

app.get('/mean', (req, res, next) => {
    try {
        const nums = turnNumsToArr(req.query.nums);
        const mean = math.round(math.mean(nums), 2);
        const response = {
        operation: 'mean',
        value: mean
        }
        res.json({response});
    }
    catch(e) {
        return next(e)
    }
})














app.listen(3000, () => {
    console.log('Server started on port 3000');
})