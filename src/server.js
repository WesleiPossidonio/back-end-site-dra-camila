import * as dotenv from 'dotenv'
import express from 'express'

import cors from 'cors'
dotenv.config()

const port = 4001
const app = express()

app.use(cors())
app.use(express.json())

app.get('/token', (request, response) => {
    return response.json({token: process.env.LIST_TOKEN})
})

app.listen(port)