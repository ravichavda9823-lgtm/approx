const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");

const AddInquiry = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("inquiry");

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message ) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }

    const userdata = req.user;

    console.log("sjdk",userdata);

    const inquiry = await collection.insertOne({
      loginId: ObjectId.createFromHexString(userdata.id),
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    if (inquiry.acknowledged) {
      return res.status(201).send({
        status: true,
        message: "Inquiry submitted successfully",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server Error",
    });
  }
};


const getInquiry = async (req, res) => {
  try {
    const db = await connectDb();
    const collection = db.collection("inquiry");

    const inquiry = await collection.find({}).toArray();

    if (inquiry.length === 0) {
      res.send({
        status: false,
        message: "No Inquiry Found",
        data: [],
      });
    } else {
      res.send({
        status: true,
        message: "Inquiry List",
        data: inquiry,
      });
    }

  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

// Delete Inquiry
const DeleteInquiry = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("inquiry");

    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        message: "Inquiry Deleted Successfully",
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  AddInquiry,
  getInquiry,
  DeleteInquiry,
};
