
//atlas
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const secretkey="ECOM"
const saltRound=10;

const {databasename}=require('../Config/db')
const newCollection=databasename.collection("Details")
const Products=databasename.collection("products")
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
         const login=bcrypt.compareSync(data.password,acc.password)
      //  const login=bcrypt.compareSync(data.email,acc.email)

    
    if(login){
        const token=jwt.sign({user:data.email},secretkey,{expiresIn:'3d'})
        console.log(login,"login");
     return res.send({msg:"Login Successful!",token:token})
    }
    else{
        return res.send({msg:"Password Incorrect"})
    }
}
else{
    return res.send({msg:"You Haven't Registered Yet"})
}
}



// const storeid=async(req,res)=>{
//     try{
//         id=req.params.id;
//         const product=await Products.findOne({id})
//         if(!product){
//             return res.status(404).send({msg:'product not found'})
//         }
//         res.send(product)
//     }
//     catch(err){
//         console.error('error in fetching',err)
//         res.status(500).send({msg:'internal server error'})
//     }
// }

module.exports={register,login}
