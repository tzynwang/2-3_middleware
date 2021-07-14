function saveToFile (log, filePath) {
  const fs = require('fs')
  fs.appendFile(filePath, `${log}\n`, function (error) {
    if (error) console.log(error)
  })
}

module.exports = saveToFile
