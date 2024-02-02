// const mongoose=require('mongoose')

// const client="mongodb+srv://SuprajaKurapati:Suppu63098@cluster0.ldtmylm.mongodb.net/ECART?retryWrites=true&w=majority"

// const connection=async()=>{
//     try{
//         await mongoose.connect(client)
//         console.log("Connected to Database");
//     }
//    catch(err){
//     console.error(err,"ERROR in Connecting Database")
//    }
// }

// module.exports={connection,mongoose}

//using mondodb atlas
const {MongoClient} =require('mongodb')

const client=new MongoClient("mongodb+srv://SuprajaKurapati:Suppu63098@cluster0.udurvsr.mongodb.net/?retryWrites=true&w=majority")
const connection=async()=>{
    try{
        await client.connect()
console.log("Connected to database from db.js");
    }
    catch(err){
        console.log(err,"Error in connecting DB");
    }
}

const databasename=client.db("random")
module.exports={connection,databasename}

