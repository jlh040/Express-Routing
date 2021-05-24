const express = require('express');
const math = require('mathjs');
const { MathError } = require('./mathError');
const { turnNumsToArr, checkForInvalidNum } = require('./helperFuncs');
let nanValue;

const app = express();

app.get('/mean', (req, res, next) => {
    console.log(typeof req.query.nums)
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
        return next(e);
    }
})

app.use((err, req, res, next) => {
    return res.status(err.status).json({
        Error: err.message
    })
});














app.listen(3000, () => {
    console.log('Server started on port 3000');
})