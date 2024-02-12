// const express = require("express")
import express  from 'express'
import { router as userRouter } from './routes/users.js'

const app = express()

app.set('view engine','ejs')
app.use(logger)

app.get("/",(req,res) => {
    console.log("Here")
    res.render('index',{text1:"world"})
    // res.download('server.js')
    // res.status(500).json({message:"Error"}).send('Hi')
})

// const userRouter = require('./routes/users')
app.use("/users",userRouter)

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)