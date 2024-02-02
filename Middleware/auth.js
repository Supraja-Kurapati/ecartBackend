// const jwt=require('jsonwebtoken')
// const secretkey="E-cart"

// const auth=(req,res,next)=>{

//     const data=req.headers["authorization"]
//     console.log(data,"token")
// const token=data.split(' ')[1]
// console.log(token)
//     if(token){
//         jwt.verify(token,secretkey,(err,decoded)=>{
//            if(err){
//             return res.send(err,"Error in accessing Token")
//         }
//         if(decoded){
//             return next()
//         }
//         else{
//             return res.send("User is not Authorised")
//         }
//         })
       
//     }
//     else{
//         return res.send({msg:"Email not Registered"})    
//     }

// }

// module.exports=auth