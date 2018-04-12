const { add, addCallback, addPromise } = require('../src/lib');

describe('Test add function', () => {
    it('Can add 2 numbers', () => {
        const total = add(4, 5);
        if (total !== 9) throw new Error('Loi');
    });

    it('Cannot add 2 strings', () => {
        try {
            const total = add('x', 'y');
            throw new Error('Loi 1');
        } catch (error) {
            if (error.message !== 'Type error') throw new Error('Loi 2');
        }
    });
});

describe('Test addCallback function', () => {
    it('Can add 2 numbers with callback', (done) => {
        addCallback(4, 5, (error, result) => {
            if (error !== null) throw new Error('Loi');
            if (result !== 9) throw new Error('Loi');
            done();
        });
    });

    it('Cannot add 2 strings with callback', (done) => {
        addCallback('x', 'y', (error, result) => {
            if (result !== undefined) throw new Error('Loi');
            if (error.message !== 'Type error') throw new Error('Loi');
            done();
        });
    });
});
