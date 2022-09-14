const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${connect.connection.host}`.yellow.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = dbConnect;