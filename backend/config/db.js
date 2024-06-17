// backend/config/db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("Please Enter Mongo DB URI");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

//data sample
// {
// "end_year": 2018,
// "intensity": 16,
// "sector": "Energy",
// "topic": "oil",
// "insight": "Oil prices will be much more volatile in 2017",
// "url": "http://www.news.tracanada.ca/2017/01/16/oil-prices-will-be-much-more-volatile-in-2017/",
// "region": "World",
// "start_year": 2017,
// "impact": "",
// "added": "January, 17 2017 04:19:59",
// "published": "January, 16 2017 00:00:00",
// "country": "",
// "relevance": 4,
// "pestle": "Economic",
// "source": "TRAC News",
// "title": "Global oil prices will witness much more volatility in 2017 even though markets may rebalance in the first half of the year if output cuts pledged by producers are implemented.",
// "likelihood": 4
// }
