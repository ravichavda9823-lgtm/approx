let app = require("./app");
const { connectDb } = require("./cogfig/connection");
require("dotenv").config();
 let PORT = process.env.PORT;

 connectDb();

 app.listen(PORT,()=>{
    console.log("Server Started");
 })