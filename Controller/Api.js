// const bcrypt=require('bcryptjs')
// const secretkey="E-cart"

// const jwt=require('jsonwebtoken')
// const saltRound=10;

// const UserCollection=require('../Model/UserModel')
// const register= async (req,res)=>{
//     try{
//     data=req.body
//     console.log(data);
//     // data.password=bcrypt.hashSync(data.password,saltRound)
//    const account=await UserCollection.findOne({email:data.email})

//    if(account){
//     // return res.send({msg:"Email Already Exist"})
//     return res.status(400).send({msg:"Email Already Exists"})
//    }
//    data.password=bcrypt.hashSync(data.password,saltRound)

//    const insertData=await UserCollection.create(data)

//    const token=jwt.sign({user:data.email},secretkey)
//    res.send({msg:"user Registered Successfully",token:token,insertData:insertData})
// }
// catch(err){
// console.error(err,"Error during registration")
// res.status(500).send({msg:"Registration failed"})
// }
// }

// module.exports={register}

//atlas

const bcrypt=require('bcryptjs')
const secretkey="7ken"
const jwt=require('jsonwebtoken')
const saltRound=10;

const {databasename}=require('../Config/db')
const newCollection=databasename.collection("Details")

const register = async (req,res)=>{
    data=req.body
    console.log(data);
    data.password=bcrypt.hashSync(data.password,saltRound)
 const acc=  await newCollection.findOne({email:data.email})
 if(acc){
    return res.send({msg:"Email Already Exist"});
}
const insertdata=await newCollection.insertOne(data)
const token=jwt.sign({user:data.email},secretkey)
res.send({msg:"user Registered Successfully",token:token,insertdata:insertdata})
}

const login=async(req,res)=>{
    data=req.body
    console.log(data);
    const acc=await newCollection.findOne({email:data.email})
    if(acc){
        // const login=bcrypt.compareSync(data.password,acc.password)
        const login=bcrypt.compareSync(data.email,acc.email)

    
    if(login){
        const token=jwt.sign({user:data.email},secretkey,{expiresIn:'3d'})
        console.log(login,"login");
     return res.send({msg:"Login Successful!"})
    }
    else{
        return res.send({msg:"Password Incorrect"})
    }
}
else{
    return res.send({msg:"You Haven't Registered Yet"})
}
}

module.exports={register,login}
