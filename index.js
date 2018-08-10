#!/usr/bin/env node
const meow                     = require('meow')
const chalk                    = require('chalk')
const { update, shouldUpdate } = require('./src/update')
const ipList                   = require('./src/iplist/ipList.json')

const cli = meow(
  `
  Usage
    $ shoulditrust 0.0.0.0

  Options
    --update, -u  Update IP database
    --help        Show help
  `,
  {
    flags: {
      update: {
        type: 'boolean',
        alias: '-u'
      }
    }
  }

)

const checkAddress = () => {

  const ipAddress = cli.input[0]

  if(!ipAddress) {
    return console.log(chalk.red(`Please specify an IP address`))
  }

  if ( !ipAddress.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/) ) {
    return console.log(chalk.red(`"${ipAddress}" is not a valid IP address`))
  }
  
  return ipList.includes(ipAddress)
         ? console.log(chalk.red(`${ipAddress} is not safe.`))
         : console.log(chalk.green(`${ipAddress} is safe.`))

}

if ( cli.flags.update || shouldUpdate() || !ipList.length ) {
  return update()
} else {
  checkAddress()
}