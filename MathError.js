class MathError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.log(this.stack);
    }
}

module.exports = {
    MathError
}