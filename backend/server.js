require('dotenv').config()
const express = require('express')
const mongodb = require('mongodb')
const routes = require('./functions/routes')
const cors = require("cors")
const app =express()
app.use(express.json())
app.use(cors())

mongodb.connect(process.env.db, {useUnifiedTopology: true}, (err, client)=>{
    if(err){
        console.log(err)
        return
    }
    const db = client.db('')
    routes(app, db)

    app.listen(5000, ()=>{
        console.log("listening on port 5000")
    })
})