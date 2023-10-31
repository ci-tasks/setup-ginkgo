import * as ps from 'child_process'
import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('ginkgo-version')
    const org_url: string = `github.com/${github.context.repo.owner}/*`

    core.info(`Attempting to download ${version}...`)
    // execute the command
    ps.execSync(`go install -v github.com/onsi/ginkgo/v2/ginkgo@${version}`)

    core.info(`Export environment variables...`)
    // export the environment variables
    core.exportVariable('GOPRIVATE', org_url)
    // done!
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
