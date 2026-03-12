const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");

let AddVenue = async (req, res) => {
  // try {
    let db = await connectDb();
    let collection = db.collection("venues");

    let {
      managerId,
      name,
      city,
      type,
      price,
      shortdesc,
      desc,
      occasionId,
      status,
    } = req.body || {};

    const image = req.file ? `${req.file.filename}` : "";

    if (
      !name ||
      !city ||
      !type ||
      !price ||
      !shortdesc ||
      !desc ||
      !image ||
      !occasionId
    ) {
      res
        .status(400)
        .send({ status: false, Message: "All Fields are required" });
      return;
    }

    let venue = await collection.insertOne({
      managerId: new ObjectId(managerId),
      name: name,
      city: city,
      type: type,
      price: price,
      shortdesc: shortdesc,
      desc: desc,
      image: image,
      occasionId: new ObjectId(occasionId),
      status: status || "Active",
    });

    if (venue.acknowledged) {
      res.status(201).send({
        status: true,
        Message: "Venue Added Successfully",
        data: venue,
      });
    }
  // } catch (e) {
  //   console.log(e);
  //   res.status(500).send({
  //     status: false,
  //     Message: "Server error",
  //   });
  // }
};

let getVenues = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("venues");

    let venues = await collection.find({}).toArray();

    if (!venues) {
      res.send({ status: false, Message: "No Data Found", data: null });
    } else {
      res.send({ status: true, Message: "Data Found", data: venues });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({
      status: false,
      Message: "Server error",
    });
  }
};

let getVenueBymanager = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("venues");
  let venue = await collection
    .find({ managerId: new ObjectId(req.user.id) })
    .toArray();

  console.log(venue);

  if (!venue) {
    res.send({ status: false, Message: "Data Not Found", data: null });
  } else {
    res.send({ status: true, Message: "Data Found", data: venue });
  }
};

let DeleteVenue = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("venues");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Venue Deleted Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

let Editvenue = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("venues");
    let { id } = req.params;
    const { _id, name, city, type, price, shortdesc, desc } = req.body;
    console.log(_id);

    const image = req.file ? `${req.file.filename}` : "";

    let venue = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (!venue) {
      return res.status(404).json({
        status: false,
        Message: "venue Not Found",
      });
    }

    let updateoccasion = {
      name: name || venue.name,
      image: image || venue.image,
      desc: desc || venue.desc,
      city: city || venue.city,
      type: type || venue.type,
      price: price || venue.price,
      shortdesc: shortdesc || venue.shortdesc,
    };

    let updateQuery = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updateoccasion },
    );

    console.log(updateQuery);
    if (updateQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Venue Updated Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

const getVenueById = async (req, res) => {
  // try {
  const db = await connectDb();
  const collection = db.collection("venues");

  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      status: false,
      message: "Venue ID is required",
    });
  }

  const venue = await collection.findOne({
    _id: new ObjectId(id),
  });

  if (!venue) {
    return res.status(404).send({
      status: false,
      message: "Venue not found",
      data: null,
    });
  }

  return res.send({
    status: true,
    message: "venue details found",
    data: venue,
  });
  // } catch (error) {
  //   return res.status(500).send({
  //     status: false,
  //     message: "Server error",
  //   });
  // }
};

module.exports = {
  AddVenue,
  getVenues,
  getVenueBymanager,
  DeleteVenue,
  Editvenue,
  getVenueById,
};
