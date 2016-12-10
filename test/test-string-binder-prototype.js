const bind   = require('../dist/string-binder-prototype.js');
const assert = require('assert');

describe('prototype', function() {
    describe('bind use prototype', function() {
        it('Object parameter test should return "No pain No gain"', function() {
            const actual = 'No {key1} No {key2}'.bind({ key1: 'pain', key2: 'gain' });
            const expect = 'No pain No gain';
            assert.equal(expect, actual);
        });
        it('Array parameter test should return "No pain No gain"', function() {
            const actual = 'No {0} No {1}'.bind('pain', 'gain');
            const expect = 'No pain No gain';
            assert.equal(expect, actual);
        });
    });
});
