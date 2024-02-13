const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//useful because it will get the absolute path of which ever machine is running the code
const absolute = path.resolve(__dirname,'content','subfolder','test.txt') 
console.log(absolute)