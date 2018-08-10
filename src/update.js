const chalk     = require('chalk')
const axios     = require('axios')
const ora       = require('ora')
const clear     = require('clear')
const fs        = require('fs')
const blacklist = require('./blacklist')

const IPLIST = `${__dirname}/iplist/iplist.json`

const update = () => {

  emptyDb()
  writeUpdateTime()

  return new Promise ((resolve, reject) => {

    blacklist.map(url => {

     clear()
      const spinner = ora(`Uptading from ${url.name}`).start()

      axios.get(url.url)
           .then(res => writeIpList(res.data))
           .then(() => spinner.succeed())
           .then(() => console.log(chalk.green(`${getDbSize()} total IP addreses`)))
           .catch(err => reject(err))
    
    })

    resolve()

  })

}

const shouldUpdate = () => {
  const UPDATE_FILE = `${__dirname}/iplist/.update`

  if (!fs.existsSync(UPDATE_FILE)) {
    return true
  }

  const lastUpdate     = fs.readFileSync(UPDATE_FILE, 'utf8')
  const timeDifference = new Date() - lastUpdate
                          // 1 month in milliseconds
  return timeDifference > 2628e9

}

const writeIpList = (content) => {

  const getIps = content.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g)

  const ipListCont = fs.readFileSync(IPLIST, 'utf8')
  const res     = JSON.parse(ipListCont)
  const newCont = res.concat(getIps)
  const json    = JSON.stringify(newCont)

  fs.writeFileSync(IPLIST, json, 'utf8')

}

const getDbSize = () => {
  const ipsCont = fs.readFileSync(IPLIST, 'utf8')
  const objectCont = JSON.parse(ipsCont)
  return objectCont.length
}

const emptyDb = () => fs.writeFileSync(IPLIST, '[]', 'utf8')

const writeUpdateTime = () => {
  return fs.writeFileSync(`${__dirname}/iplist/.update`, new Date(), 'utf8')
}

module.exports = {
  update,
  emptyDb,
  getDbSize,
  shouldUpdate
}