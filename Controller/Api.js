const bcrypt=require('bcryptjs')
const secretkey="E-cart"

const jwt=require('jsonwebtoken')
const saltRound=10;

const UserCollection=require('../Model/UserModel')
const register= async (req,res)=>{
    data=req.body
    console.log(data);
    data.password=bcrypt.hashSync(data.password,saltRound)
   const account=await UserCollection.findOne({email:data.email})

   if(account){
    return res.send({msg:"Email Already Exist"})
   }

   const insertData=await UserCollection.create(data)

   const token=jwt.sign({user:data.email,secretkey})
   res.send({msg:"user Registered Successfully",token:token,insertData:insertData})

}

module.exports={register}
