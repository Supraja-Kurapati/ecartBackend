const express= require('express')
const app=express()
const {route}=require("./Routes/route")
const cors=require('cors')
const {connection}=require('./Config/db')
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',route)
app.listen(5132,()=>{
    console.log("Server working");
    connection();
    console.log("Connected To Database");
    
})