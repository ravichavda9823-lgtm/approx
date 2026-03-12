const { ObjectId } = require("mongodb");
let { connectDb } = require("../cogfig/connection");

const Addoccasion = async (req, res) => {
  // try {
  let db = await connectDb();
  let collection = db.collection("occasion");

  const { managerId, name, desc } = req.body;
  const image = req.file ? `${req.file.filename}` : "";

  console.log(name);
  console.log(desc);
  console.log(image);

  if (!name || !image || !desc) {
    return res.status(400).send({
      status: false,
      message: "All fields are required",
    });
  }

  const occasion = await collection.insertOne({
    managerId: new ObjectId(managerId),
    name: name,
    image: image,
    desc: desc,
    status:"Acive",
  });

  if (occasion.acknowledged) {
    return res.status(201).send({
      status: true,
      message: "Occasion added successfully",
    });
  }
  // } catch (error) {
  //   return res.status(500).send({
  //     status: false,
  //     message: "Server error",
  //   });
  // }
};

const getoccasion = async (req, res) => {
  const db = await connectDb();
  const collection = db.collection("occasion");

  const occasion = await collection.find({}).toArray();

  if (occasion.length === 0) {
    res
      .status(404)
      .send({ status: false, message: "Data Not Found", data: null });
  } else {
    res
      .status(200)
      .send({ status: true, message: "Data Found", data: occasion });
  }
};

let getOccasionBymanager = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("occasion");
  let occasion = await collection
    .find({ managerId: new ObjectId(req.user.id) })
    .toArray();

  console.log(occasion);

  if (!occasion) {
    res.send({ status: false, Message: "Data Not Found", data: null });
  } else {
    res.send({ status: true, Message: "Data Found", data: occasion });
  }
};

let DeleteOccasion = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("occasion");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Occasion Deleted Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

let EditOccasion = async (req, res) => {
  // try {
    let db = await connectDb();
    let collection = db.collection("occasion");
    let { id } = req.params;
    const { _id, name, desc } = req.body;

    const image = req.file ? `${req.file.filename}` : "";

    let occasion = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (!occasion) {
      return res.status(404).json({
        status: false,
        Message: "Occasion Not Found",
      });
    }

    let updateoccasion = {
      name: name || occasion.name,
      image: image || occasion.image,
      desc: desc || occasion.desc,
    };

    let updateQuery = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updateoccasion },
    );

    console.log(updateQuery);
    if (updateQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Occasion Updated Successfully",
      });
    }
  // } catch (e) {
  //   return res.status(500).json({
  //     status: false,
  //     Message: "Internal Server Error. please try again later.",
  //   });
  // }
};

module.exports = {
  Addoccasion,
  getoccasion,
  getOccasionBymanager,
  DeleteOccasion,
  EditOccasion,
};
