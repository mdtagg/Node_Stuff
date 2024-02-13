const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8',(err,result) => {
    if(err) {
        console.log("error")
        return;
    }
    const first = result;
    console.log({first})
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err) return;
        const second = result
        writeFile('./content/result-async.txt',`Here is the result ${first}, ${second}`,(err,result) => {
            if(err) return 
            console.log(result)
        })
    })
})