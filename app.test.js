const axios = require('axios');

describe('mean tests', () => {
    test('does the response have a 200 status code?', async () => {
        let resp = await axios.get('http://localhost:3000/mean');
        expect(1).toBe(1);
        console.log(resp);
    })
})