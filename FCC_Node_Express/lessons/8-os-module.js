
//os is a built in module so you dont need file path

const os = require('os')

// info about current user
const user = os.userInfo()
// console.log(user)

//returns system uptime in seconds

console.log(`The System Uptime is ${os.uptime} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)