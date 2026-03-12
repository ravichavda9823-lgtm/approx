const { ObjectId } = require("mongodb");
const { connectDb } = require("../cogfig/connection");

let Profile = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");
    let userId = req.user;
    console.log(userId);

    let user = await collection.findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } }, 
    );

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Profile Found",
      users: user, 
      user: req.user,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: false,
      message: "Internal server Error. please try again later",
    });
  }
};





module.exports = { Profile }
