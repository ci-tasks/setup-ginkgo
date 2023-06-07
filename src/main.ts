import * as core from '@actions/core'
import {setup} from './setup'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('ginkgo-version')
    core.info(`Attempting to download ${version}...`)
    // setup the ginkgo
    await setup({version})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
