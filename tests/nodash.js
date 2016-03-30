'use strict';

import test from 'tape';
import nodash from './../src';

test('nodash test', (t) => {
  t.equals(typeof nodash, 'function');
  t.equals(nodash("does not include dash"), true);
  t.equals(nodash("includes-dash"), false);
  t.end();
});
