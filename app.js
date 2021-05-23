const express = require('express');
const math = require('mathjs');
const MathError = require('./mathError');

const app = express();

function turnNumsToArr(nums) {
    const numArr = nums.split(',');
    return numArr.map(val => {
        return +val;
    })
}

app.get('/mean', (req, res, next) => {
    const nums = turnNumsToArr(req.query.nums);
    const mean = math.round(math.mean(nums), 2);
    const response = {
        operation: 'mean',
        value: mean
    }

    res.json({response});
})














app.listen(3000, () => {
    console.log('Server started on port 3000');
})