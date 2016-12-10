const bind   = require('../dist/string-binder-function.js');
const assert = require('assert');

describe('function', function() {
    describe('bind use function', function() {
        it('Object parameter test should return "No pain No gain"', function() {
            const actual = bind('No {key1} No {key2}', { key1: 'pain', key2: 'gain' });
            const expect = 'No pain No gain';
            assert.equal(expect, actual);
        });
        it('Array parameter test should return "No pain No gain"', function() {
            const actual = bind('No {0} No {1}', 'pain', 'gain');
            const expect = 'No pain No gain';
            assert.equal(expect, actual);
        });
    });
});
