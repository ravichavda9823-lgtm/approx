const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");


const AddFeedback = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("feedback");

    const { message, loginId,  rating,name, email } = req.body;

    if (!name || !email || !message || !loginId || !rating ) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }

    const feedback = await collection.insertOne({
      name,
      email,
      message,
      loginId: ObjectId.createFromHexString(loginId),
      rating,
      createdAt: new Date(),
    });

    if (feedback.acknowledged) {
      return res.status(201).send({
        status: true,
        message: "Feedback added successfully",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

const getFeedback = async (req, res) => {
  try {
    const db = await connectDb();
    const collection = db.collection("feedback");

    const feedback = await collection.find({}).toArray();

    if (feedback.length === 0) {
      res.send({ status: false, message: "Data Not Found", data: null });
    } else {
      res.send({ status: true, message: "Data Found", data: feedback });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: "Server error" });
  }
};

let DeletedFeedback = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("feedback");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({_id: ObjectId.createFromHexString(id)});

    if(deleteQuery.acknowledged){
      return res.status(200).json({
        status:true,
        Message:"Feedback Deleted Successfully"
      })
    }
  }catch(e){
      return res.status(500).json({
        status:false,
        Message:"Internal Server Error. please try again later."
      })
  }
}
module.exports = { AddFeedback, getFeedback, DeletedFeedback };
