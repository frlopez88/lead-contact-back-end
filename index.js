import express from 'express'
const app = express()
import { lead } from './routes/leadRoute.js'
import {config} from 'dotenv'
import cors from 'cors'

config()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/leads',lead)


app.listen(port, ()=>{
    console.log(`Listen port: ${port}`)
})