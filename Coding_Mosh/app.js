// const EventEmitter = require("events");
// const emitter = new EventEmitter();

const Logger = require("./logger")
const logger = new Logger.log()

logger.on("messageLogged",(e) => {
    console.log('Listener called',e)
})

logger.log('message')

// emitter.emit('messageLogged',{id:1,url:'http://'})
// emitter.on("messageLogged",(e) => {
//     console.log("Listener called",e)
// })

//Raise : logging (data:message)


// const fs = require("fs")
// // const files = fs.readdirSync("./")
// // console.log(files)

// fs.readdir("$", function(err,files) {
//     if(err) console.log("error",err);
//     else console.log("result",files)
// })
// const os = require("os")

// const totalMemory = os.totalmem()
// const freeMemory = os.freemem()
// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)
