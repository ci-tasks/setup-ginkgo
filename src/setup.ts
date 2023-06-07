import {exec} from 'child_process'

type Input = {
  version: string
}

type Result = {
  stdout: string
  stderr: string
}

async function execute(cmd: string): Promise<Result> {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        resolve({stdout, stderr})
      }
    })
  })
}

export async function setup({version}: Input): Promise<void> {
  await execute(`go install -v github.com/onsi/ginkgo/v2/ginkgo@${version}`)
}
