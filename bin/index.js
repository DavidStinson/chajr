#!/usr/bin/env node
import { Command } from "commander/esm.mjs"
import axios from "axios"
import chalk from "chalk"

const program = new Command()
const log = console.log
const logError = chalk.bold.red
const logWarning = chalk.yellowBright
const logVersion = chalk.magenta
const logCommand = chalk.bold.whiteBright

program
  .version("2.0.0-a", "-v, --version", "Outputs the current version of Chajr")
  .option(
    "-a, --after <post-scripts...>",
    "Optional scripts to run after building a template"
  )
  .option(
    "-b, --before <pre-scripts...>",
    "Optional scripts to run before building a template"
  )

axios
  .get("https://api.github.com/repos/davidstinson/chajr/releases/latest")
  .then((response) => {
    if (response.data.name.replace("v", "") === program.version()) return
    const currentVersionNumber = program.version().replace("-a", "").split(".")
    const latestRelease = response.data.name.replace("v", "").split(".")
    let updateType = null

    for (let i = 1; i < currentVersionNumber.length + 1; i++) {
      if (latestRelease[i] > currentVersionNumber[i]) {
        updateType = i
        break
      }
    }

    if (updateType) {
      log(chalk
        `{magenta A new ${
          updateType === 1 ? "major" : updateType === 2 ? "minor" : "patch"
        } release, {cyan ${response.data.name}}, is available!}`
      )
      log(chalk`{magenta Update to {cyan ${response.data.name}} with this command:}`)
      log(logCommand(`npm i -g chajr`))
      log(logVersion(`Get details about this new version with this command: `))
      log(logCommand(`chajr -u`))
    }
  })
  .catch((error) => {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log("Error", error.message)
    }
  })

console.log("hello, friend")
