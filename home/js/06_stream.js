const fs = require('fs')
// 1.png copy -> 2.png
const rs = fs.createReadStream('./1.png')
const ws = fs.createWriteStream('./2.png')
rs.pipe(ws)