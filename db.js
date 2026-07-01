import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"

mongoose.connect(
    process.env.MONGO_URI
)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Database Connected!')
})

db.on('error', (err) =>{
    console.log('MongoDB Connection Error ' + err)
})

export default mongoose