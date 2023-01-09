import express from 'express'

const server = express()

server.get('/', async (req, res)=>{
    res.send("Hello! Welcome to this awesome server!")
})
server.get('/pull/:data', async (req,res)=>{
    res.send(`Your parameter is ${req.params.data}`)
})

server.listen(80,()=>{
    console.log("Web Server Loaded...")
})