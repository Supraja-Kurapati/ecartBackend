const mongoose=require('mongoose')

const client="mongodb+srv://SuprajaKurapati:Suppu63098@cluster0.ldtmylm.mongodb.net/ECART?retryWrites=true&w=majority"

const connection=async()=>{
    try{
        await mongoose.connect(client)
        console.log("Connected to Database");
    }
   catch(err){
    console.error(err,"ERROR in Connecting Database")
   }
}

module.exports={connection,mongoose}