const { on } = require('../index');
const assert = require('assert');

let count = 0;
describe('test to promise handler', () => {
    it('should throw the error', (done) => {
        on((error) => {
            assert(error.message === 'error');
            assert(error.promise);
            if (!count) done();
            count++;
        });

        Promise.reject('error');
    });
});
