const express = require('express')
process.loadEnvFile('.env')

const app = express()

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log('listening on port '+port)
})