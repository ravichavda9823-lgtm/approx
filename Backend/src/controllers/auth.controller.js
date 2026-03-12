const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");
let jwt = require("jsonwebtoken");
require("dotenv").config();
let key = process.env.KEY;
let bcrypt = require("bcrypt");
const e = require("express");

let Signup = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");
    let { username, email, phone, password, role } = req.body;

    if (!username || !email || !phone || !password || !role) {
      return res
        .status(404)
        .send({ status: false, Message: "All Fileds are required*" });
    }

    let exituser = await collection.findOne({ $or: [{ email }, { phone }] });

    if (exituser) {
      return res
        .status(404)
        .send({ status: false, Message: "User All ready exits" });
    }

    let securePassword = await bcrypt.hash(password, 10);

    let insertUser = await collection.insertOne({
      _id: new ObjectId(),
      username: username,
      email: email,
      phone: phone,
      password: securePassword,
      role: role,
      status: true,
    });

    if (insertUser.acknowledged) {
      return res
        .status(201)
        .send({ status: true, Message: "Registartion Succesfully..." });
    }
  } catch (e) {
    return res.status(505).send({ status: true, Message: "Server error" });
  }
};

let Singin = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");
    let { email, password } = req.body;

    let loginuser = await collection.findOne({ email: email });
    console.log(loginuser);

    if (!loginuser) {
      return res
        .status(404)
        .send({ status: false, Message: "User Not Founded" });
    }

    let isMathed = await bcrypt.compare(password, loginuser.password);

    if (!isMathed) {
      return res
        .status(404)
        .send({ status: false, Message: "Invalid Password" });
    }

    user = {
      id: loginuser._id,
      name: loginuser.username,
      email: loginuser.email,
      role: loginuser.role,
    };

    let token = jwt.sign(user, key, { expiresIn: "5h" });

    return res
      .status(200)
      .send({
        status: true,
        Message: "Login Succesfully...",
        token: token,
        role: loginuser.role,
      });
  } catch (e) {
    return res.status(505).send({ status: true, Message: "Server error" });
  }
};

let getSingin = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");
    let signin = await collection.find({}).toArray();

    if (signin.length === 0) {
      return res
        .status(404)
        .send({ status: false, Message: "Data Not Found", data: null });
    } else {
      return res
        .status(200)
        .send({ status: true, Message: "Data Found", data: signin });
    }
  } catch (e) {
    return res.status(505).send({ status: true, Message: "Server error" });
  }
};
let getSingup = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");
    let signin = await collection.find({}).toArray();

    if (signin.length === 0) {
      return res
        .status(404)
        .send({ status: false, Message: "Data Not Found", data: null });
    } else {
      return res
        .status(200)
        .send({ status: true, Message: "Data Found", data: signin });
    }
  } catch (e) {
    return res.status(505).send({ status: true, Message: "Server error" });
  }
};

let DeletedUser = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");
    let { id } = req.params;

    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteQuery.acknowledged) {
      return res.status(200).json({
        status: true,
        Message: "User Deleted Successfully",
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: false,
      Message: "Internal Server Error. please try again later.",
    });
  }
};

let EditUser = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");

    let { id } = req.params;
    console.log("userID:", id);

    let {username, email, phone } = req.body;   

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid User ID"
      });
    }

    let updateQuery = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          username: username,
          email: email,
          phone:phone
        }
      }
    );

    console.log("updatedData:", updateQuery);

    if (updateQuery.matchedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "User Updated Successfully",
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  Signup,
  Singin,
  getSingin,
  DeletedUser,
  EditUser,
  getSingup,
};
