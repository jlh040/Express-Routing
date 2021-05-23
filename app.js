const express = require('express');
const math = require('mathjs');

const app = express();

app.get('/mean', (req, res, next) => {
    const nums = req.query.nums;
    console.log(turnNumsToArr(nums))
})








function turnNumsToArr(nums) {
    const numArr = nums.split(',');
    return numArr.map(val => {
        return +val;
    })
}










app.listen(3000, () => {
    console.log('Server started on port 3000');
})