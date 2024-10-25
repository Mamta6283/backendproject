require('dotenv').config()

const express=require('express')

const app=express()
const port=4000

app.get("/",(req,res)=>{
    res.send("welcome to express world")
})
app.get("/twitter",(req,res)=>{
    res.send({msg:"this is new api "})
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at this form</h1>')
})
app.listen(process.env.port,()=>{
    console.log(`click here- http://localhost:${port}`)
})