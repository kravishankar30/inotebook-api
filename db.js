const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/inotebook?directConnection=true";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;