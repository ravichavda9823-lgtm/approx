const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");

let AddVenuetype = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("venuetype");

    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }

    const venuetype = await collection.insertOne({ name });

    if (venuetype.acknowledged) {
      return res.status(201).send({
        status: true,
        message: "venue type added successfully",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

const getVenuetype = async (req, res) => {
  const db = await connectDb();
  const collection = db.collection("venuetype");

  const venuetype = await collection.find({}).toArray();

  if (venuetype.length === 0) {
    res.send({ status: false, message: "Data Not Found", data: null });
  } else {
    res.send({ status: true, message: "Data Found", data: venuetype });
  }
};

let DeleteVenueType = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("venuetype");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({_id: ObjectId.createFromHexString(id)});

    if(deleteQuery.acknowledged){
      return res.status(200).json({
        status:true,
        Message:"Venuetype Deleted Successfully"
      })
    }
  }catch(e){
      return res.status(500).json({
        status:false,
        Message:"Internal Server Error. please try again later."
      })
  }
}



let EditVenuetype = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("venuetype");
    let { id } = req.params;
    let  { _id, name } = req.body || {}; 
    console.log(_id);

    let venuetype = await collection.findOne({_id: ObjectId.createFromHexString(_id)});

    if(!venuetype){
      return res.status(404).json({
        status:false,
        Message:"Venue Not Found"
      });
    }

    let updatevenuetype ={
      name: name || venuetype.name,
    }

    let updateQuery = await collection.updateOne(
      {_id: ObjectId.createFromHexString(_id)}, {$set: updatevenuetype});

      console.log(updateQuery);
      if(updateQuery.acknowledged){
        return res.status(200).json({
          status:true,
          Message:"Venue Updated Successfully"
        })
      }
  }catch(e){
      return res.status(500).json({
        status:false, 
        Message:"Internal Server Error. please try again later."
      })
  }
}
module.exports = { AddVenuetype, getVenuetype,DeleteVenueType, EditVenuetype };
