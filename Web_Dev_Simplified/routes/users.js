// const express = require('express')
import express from "express"

export const router = express.Router()

router.get("/",(req,res) => {
    res.send("User List")
})

router.get("/new",(req,res) => {
    res.send("User New Form")
})

router.post('/',(req,res) => {
    res.send("Create User")
})

/*.route allows chaining */
router.route("/:id").get((req,res) => {
    console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`)
}).put((req,res) => {
    res.send(`Update User with ID ${req.params.id}`)
}).delete((req,res) => {
    res.send(`Delete User with ID ${req.params.id}`)
})

const users = [{user:'Mike'},{user:"Becca"}]
/*whenever you go to a route with a certain parameter (id) run this code */
router.param("id",(req,res,next,id) => {
    req.user = users[id]
    next()
})


/* The id part of the string is treated as a variable that variable gets assigned to what the user inputs after the slash */
// router.get("/:id",(req,res) => {
//     res.send(`Get User with ID ${req.params.id}`)
// })

// router.put("/:id",(req,res) => {
//     res.send(`Update User with ID ${req.params.id}`)
// })

// router.delete("/:id",(req,res) => {
//     res.send(`Delete User with ID ${req.params.id}`)
// })

// module.exports = router 