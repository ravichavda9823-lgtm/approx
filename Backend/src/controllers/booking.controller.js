const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");

const Booking = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("booking");

    const { hotelId, checkin, checkout, message, totalAmount } = req.body;

    if (!message || !checkin || !checkout || !hotelId) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }

    const userdata = req.user;

    console.log(userdata);

    const booking = await collection.insertOne({
      hotelId: ObjectId.createFromHexString(hotelId),
      loginId: ObjectId.createFromHexString(userdata.id),
      message: message,
      totalAmount: totalAmount,
      checkin: new Date(checkin),
      checkout: new Date(checkout),
      status: "pending",
    });

    if (booking.acknowledged) {
      return res.status(201).send({
        status: true,
        message: "Booking successfully...",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

const getBooking = async (req, res) => {
  try {
    const db = await connectDb();
    const collection = db.collection("booking");
    const userdata = req.user;
    
    const bookings = await collection
      .aggregate([
        {
        $match: {
          loginId: new ObjectId(userdata.id),
        },
      },
        {
          $lookup: {
            from: "hoteldetails",
            localField: "hotelId",
            foreignField: "_id",
            as: "hotelDetails",
          },
        },
        {
          $unwind: {
            path: "$hotelDetails",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "hotel",
            localField: "loginId",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $unwind: {
            path: "$userDetails",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            hotelId: 1,
            loginId: 1,
            checkin: 1,
            checkout: 1,
            message: 1,
            totalAmount: 1,
            status: 1,
            hotel_name: "$hotelDetails.name",
            hotel_image: "$hotelDetails.image",
            hotel_city: "$hotelDetails.city",
            user_name: "$userDetails.username",
            user_email: "$userDetails.email",
          },
        },
      ])
      .toArray();

    console.log("Final Aggregation Result:", bookings);

    res.send({
      status: true,
      message: "Data Found",
      data: bookings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};

const getAllBooking = async (req, res) => {
  try {
    const db = await connectDb();
    const collection = db.collection("booking");
    
    const bookings = await collection
      .aggregate([
        {
          $lookup: {
            from: "hoteldetails",
            localField: "hotelId",
            foreignField: "_id",
            as: "hotelDetails",
          },
        },
        {
          $unwind: {
            path: "$hotelDetails",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "hotel",
            localField: "loginId",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $unwind: {
            path: "$userDetails",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            hotelId: 1,
            loginId: 1,
            checkin: 1,
            checkout: 1,
            message: 1,
            totalAmount: 1,
            status: 1,
            hotel_name: "$hotelDetails.name",
            hotel_image: "$hotelDetails.image",
            hotel_city: "$hotelDetails.city",
            user_name: "$userDetails.username",
            user_email: "$userDetails.email",
          },
        },
      ])
      .toArray();

    console.log("Final Aggregation Result:", bookings);

    res.send({
      status: true,
      message: "Data Found",
      data: bookings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Server error",
    });
  }
};



let Deletebooking = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("booking");
let { id } = req.params;
    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "Booking Deleted Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

let UpdateBookingStatus = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("booking");

    const { id } = req.params;
    const { status } = req.body;

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } }
    );

    res.send({
      status: true,
      message: "Booking status updated",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "Error updating status",
    });
  }
};
 
module.exports = { Booking, getBooking, getAllBooking, Deletebooking, UpdateBookingStatus };
