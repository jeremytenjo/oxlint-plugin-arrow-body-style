import assert from 'node:assert/strict'
import test from 'node:test'

import plugin from '../src/index.mjs'

test('exports the arrow-body-style rule', () => {
  assert.equal(plugin.meta.name, 'arrow-body-style')
  assert.equal(typeof plugin.rules.always.create, 'function')
  assert.equal(plugin.rules.always.meta.fixable, 'code')
})
