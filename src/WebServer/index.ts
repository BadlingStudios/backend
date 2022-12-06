import express from 'express'

const server = express()

server.get('/', async (req, res)=>{
    res.send("Hello! Welcome to this awesome server!")
})

server.listen(80,()=>{
    console.log("Web Server")
})