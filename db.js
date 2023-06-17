const mongoose = require("mongoose");

const connectToMongo = async () => {
    await mongoose.connect(process.env.REACT_APP_MONGO_URI).then(() => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;