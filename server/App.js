const User = require('./Model/usermodel')
const express= require('express');
const app =express();
const cors= require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
const mongoose =require("mongoose");

var corsOptions={
    origin :"*",
    Credentials:true

}

app.use(cors(corsOptions));

 mongoose.connect('mongodb://localhost:27017/mern')
 .then(()=>console.log("Database started"))
 .catch(error=>console.log("error in Database",error))


app.post('/register',(req,res)=>{
    console.log("first",req.body)
const {firstName,lastName,email,password}=req.body;
try{
    const newUser= new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
    newUser.save();
    return (res.status(200).json({msg:newUser}))
    
}catch(error){
    return console.log(error)
}

})


app.get('/login',(req,res)=>{
    const {email, password}=req.body;
    try{
 const user=User.findOne({email:email})
 if (user){
    user.password===password
    return res.status(200).json("Authenticated")
 }
 else{
     return res.status(403).json("Invalid")
 }


    }catch(error){
        console.log(error)
    }

})




app.get('/logout',(req,res)=>{
    res.redirect('/');
})
const port= 5000;
app.listen(port,()=>console.log(`Server is listening on port ${port}`)
)