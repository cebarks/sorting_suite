const assert = require('chai').assert;
const bubbleSort = require('../bubble.js')

describe('bubble.js', () => {
  describe('#bubbleSort()', () => {
    it('should return [1, 2, 3] when passed [3, 1, 2]', () => {
      assert.deepEqual(bubbleSort([3, 1, 2]), [1, 2, 3]);
    });
  });
});
