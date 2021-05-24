const request = require('supertest');
const { app } = require('./app');

describe('mean tests', () => {
    test('do we get a 200 status code?', async () => {
        const response = await request(app).get('/mean?nums=1,2,3');
        expect(response.status).toEqual(200);
    })

    test('are we getting accurate answers?', async () => {
        const resp = await request(app).get('/mean?nums=5,6,7')
        let respObj = JSON.parse(resp.text)
        expect(respObj['response']['value']).toEqual(6)
    })
});