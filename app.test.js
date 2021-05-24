const request = require('supertest');
const { app } = require('./app');

describe('mean tests', () => {
    test('do we get a 200 status code?', async () => {
        const response = await request(app).get('/mean?nums=1,2,3');
        expect(response.status).toEqual(200);
    })

    test('are we getting accurate answers?', async () => {
        const resp = await request(app).get('/mean?nums=5,6,7');
        let respObj = JSON.parse(resp.text);
        expect(respObj['response']['value']).toEqual(6);

        const resp2 = await request(app).get('/mean?nums=8,8,8');
        let respObj2 = JSON.parse(resp2.text);
        expect(respObj2['response']['value']).toEqual(8);;
    })

    test('do our errors work?', async () => {
        const resp = await request(app).get('/mean');
        let respObj = JSON.parse(resp.text);

        expect(respObj['Error']).toContain('Nums are required');
        expect(resp.status).toEqual(400)

        const resp2 = await request(app).get('/mean?nums=1,5,7,dog');
        let respObj2 = JSON.parse(resp2.text);

        expect(respObj2['Error']).toContain('dog is not a number');
        expect(resp2.status).toEqual(400)
    })
});

describe('median tests', () => {
    test('are we getting an OK status code?', async () => {
        const response = await request(app).get('/median?nums=17,65,33,8,1');
        expect(response.status).toEqual(200);
    })

    test('do we get accurate answers?', async () => {
        const resp = await request(app).get('/median?nums=10,11,12,13,14,15,16');
        let respObj = JSON.parse(resp.text);
        expect(respObj['response']['value']).toEqual(13);
    })

    test('do our errors work?', async () => {
        const resp = await request(app).get('/median')
        let respObj = JSON.parse(resp.text);

        expect(respObj['Error']).toContain('Nums are required');
        expect(resp.status).toEqual(400)

        const resp2 = await request(app).get('/median?nums=John');
        let respObj2 = JSON.parse(resp2.text);

        expect(respObj2['Error']).toContain('John is not a number');
        expect(resp2.status).toEqual(400)
    })
})

describe('mode tests', () => {
    test('are we getting an OK status code?', async () => {
        const response = await request(app).get('/mode?nums=11,55,87,94');
        expect(response.status).toEqual(200);
    })

})