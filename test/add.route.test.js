const request = require('supertest');
const { equal } = require('assert');
const { app } = require('../src/index');

describe.only('Test GET /cong/:a/:b', () => {
    it('Can add 2 numbers', async () => {
        const response = await request(app).get('/cong/4/5');
        const { success, result } = response.body;
        equal(success, true);
        equal(result, 9);
    });
});
