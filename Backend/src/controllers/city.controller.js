const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");



const Addcity = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("city");

    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }

    const city = await collection.insertOne({ name });

    if (city.acknowledged) {
      return res.status(201).send({
        status: true,
        message: "City added successfully",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

const getSelectcity = async (req, res) => {
  const db = await connectDb();
  const collection = db.collection("city");

  const city = await collection.find({}).toArray();

  if (city.length === 0) {
    res.send({ status: false, message: "Data Not Found", data: null });
  } else {
    res.send({ status: true, message: "Data Found", data: city });
  }
};

let DeleteCity = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("city");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({_id: ObjectId.createFromHexString(id)});

    if(deleteQuery.acknowledged){
      return res.status(200).json({
        status:true,
        Message:"City Deleted Successfully"
      })
    }
  }catch(e){
      return res.status(500).json({
        status:false,
        Message:"Internal Server Error. please try again later."
      })
  }
}



let EditCity = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("city");
    let { id } = req.params;
    let  { _id, name } = req.body || {}; 
    console.log(_id);

    let city = await collection.findOne({_id: ObjectId.createFromHexString(id)});

    if(!city){
      return res.status(404).json({
        status:false,
        Message:"city Not Found"
      });
    }

    let updatecity ={
      name: name || city.name,
    }

    let updateQuery = await collection.updateOne(
      {_id: ObjectId.createFromHexString(id)}, {$set: updatecity});

      console.log(updateQuery);
      if(updateQuery.acknowledged){
        return res.status(200).json({
          status:true,
          Message:"city Updated Successfully"
        })
      }
  }catch(e){
      return res.status(500).json({
        status:false, 
        Message:"Internal Server Error. please try again later."
      })
  }
}





module.exports = { Addcity, getSelectcity,DeleteCity, EditCity };
