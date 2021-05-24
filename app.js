const express = require('express');
const math = require('mathjs');
const { MathError } = require('./mathError');
const { turnNumsToArr, checkForInvalidNum, makeRes } = require('./helperFuncs');
let nanValue;

const app = express();

app.get('/mean', (req, res, next) => {
    try {
        makeRes(math.mean, req, res)
    }
    catch(e) {
        return next(e);
    }
})

app.get('/median', (req, res, next) => {
    try {
        makeRes(math.median, req, res);
    }
    catch(e) {
        return next(e);
    }
})

app.get('/mode', (req, res, next) => {
    try {
        makeRes(math.mode, req, res);
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