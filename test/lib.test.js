const { add, addCallback, addPromise } = require('../src/lib');
const { equal } = require('assert');

describe('Test add function', () => {
    it('Can add 2 numbers', () => {
        const total = add(4, 5);
        equal(total, 9);
    });

    it('Cannot add 2 strings', () => {
        try {
            const total = add('x', 'y');
            throw new Error('Loi 1');
        } catch (error) {
            equal(error.message, 'Type error');
        }
    });
});

describe('Test addCallback function', () => {
    it('Can add 2 numbers with callback', (done) => {
        addCallback(4, 5, (error, result) => {
            equal(error, null);
            equal(result, 9);
            done();
        });
    });

    it('Cannot add 2 strings with callback', (done) => {
        addCallback('x', 'y', (error, result) => {
            equal(result, undefined);
            equal(error.message, 'Type error');
            done();
        });
    });
});

describe('Test addPromise function', () => {
    it('Can add 2 numbers with callback', (done) => {
        addPromise(4, 5)
        .then(result => equal(result, 9))
        .then(() => done());
    });

    it('Cannot add 2 strings with callback', (done) => {
        addPromise('x', 'y')
        .then(() => { throw new Error('Loi'); })
        .catch(error => equal(error.message, 'Type error'))
        .then(() => done());
    });
});
