let {MongoClient} = require("mongodb");

require("dotenv").config();
 let url = process.env.URL;

 let connectDb = async() =>{
    try{
        let client  = await MongoClient.connect(url);
        let db = client.db("royalking");
        console.log("DB Created");
        if(db){
            return db;
        }
    }catch(e){
        console.log(e);
    }
 }

 module.exports = {connectDb};