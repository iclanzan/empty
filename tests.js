'use strict';

var test = require('tape');
var supports = require('./');

test('Desktop browser', function (assert) {
  assert.plan(2);

  assert.ok(!supports.touch, 'touch');
  assert.ok(supports.svg, 'svg');
});
