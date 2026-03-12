const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");

const Addhotel = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hoteldetails");

    const { managerId, name, type, city, price, shortdesc, desc, status } =
      req.body;

    const image = req.file ? `${req.file.filename}` : "";

    if (
      !name ||
      !image ||
      !city ||
      !price ||
      !desc ||
      !shortdesc ||
      !type ||
      !status
    ) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }

    let hotel = await collection.insertOne({
      managerId: new ObjectId(managerId),
      name: name,
      image: image,
      type: type,
      city: city,
      price: price,
      shortdesc: shortdesc,
      desc: desc,
      status: "Active",
    });

    if (hotel.acknowledged) {
      return res.status(201).send({
        status: true,
        message: "Hotel added successfully",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

const getHotel = async (req, res) => {
  const db = await connectDb();
  const collection = db.collection("hoteldetails");

  const hotel = await collection.find({}).toArray();

  if (hotel.length === 0) {
    res.send({ status: false, message: "Data Not Found", data: null });
  } else {
    res.send({ status: true, message: "Data Found", data: hotel });
  }
};

const getHotelById = async (req, res) => {
  try {
    const db = await connectDb();
    const collection = db.collection("hoteldetails");

    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: false,
        message: "Hotel ID is required",
      });
    }

    const hotel = await collection.findOne({
      _id: new ObjectId(id),
    });

    if (!hotel) {
      return res.status(404).send({
        status: false,
        message: "Hotel not found",
        data: null,
      });
    }

    return res.send({
      status: true,
      message: "Hotel details found",
      data: hotel,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

let getHotelByManager = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("hoteldetails");
  let hotel = await collection
    .find({ managerId: new ObjectId(req.user.id) })
    .toArray();

  console.log(hotel);

  if (!hotel) {
    res.send({ status: false, Message: "Data Not Found", data: null });
  } else {
    res.send({ status: true, Message: "Data Found", data: hotel });
  }
};

let DeleteHotel = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hoteldetails");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Hotel Deleted Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

let EditHotel = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hoteldetails");
    let { id } = req.params;
    const { _id, name, city, type, price, shortdesc, desc } = req.body;
    console.log(_id);

     const image = req.file ? `${req.file.filename}` : "";

    let hotel = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (!hotel) {
      return res.status(404).json({
        status: false,
        Message: "Hotel Not Found",
      });
    }

    let updatehotel = {
      name: name || hotel.name,
      image: image || hotel.image,
      type: type || hotel.type,
      price: price || hotel.price,
      city: city || hotel.city,
      shortdesc: shortdesc || hotel.shortdesc,
      desc: desc || hotel.desc,
      status: "Active" || hotel.status,
    };

    let updateQuery = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updatehotel },
    );

    console.log(updateQuery);
    if (updateQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Hotel Updated Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

module.exports = {
  Addhotel,
  getHotel,
  getHotelById,
  getHotelByManager,
  DeleteHotel,
  EditHotel,
};
