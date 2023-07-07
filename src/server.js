import * as dotenv from 'dotenv'
import express from 'express'

import cors from 'cors'
dotenv.config()

const port = 4000
const app = express()

app.use(cors())
app.use(express.json())



app.get('/token', (request, response) => {
    const token = process.env.TOKEN
    console.log(token)
    return response.json({token: token})
})

app.listen(port)