import {setup} from '../src/setup'
import {expect, test} from '@jest/globals'
import path from 'path'
import fs from 'fs'

test('setup the ginkgo v2.9.7', async () => {
  await setup({version: 'v2.9.7'})
  const filepath = process.env.HOME + '/go/bin/ginkgo'
  expect(fs.existsSync(filepath)).toBe(true)
}, 36000)
