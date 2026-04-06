if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
 
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listings.js");
 
const dbUrl = process.env.ATLASDB_URL;
 
async function main() {
  await mongoose.connect(dbUrl);
}
 
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
 
const owners = [
  "6975f434f25e0f2b53edddc3",
  "6973d19a5884df940926e9a8",
  "697a6abf1eaed7fe2c6123ce",
];
 
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj, index) => ({
    ...obj,
    owner: owners[index % owners.length],
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized with", initData.data.length, "listings across 3 owners!");
};
 
initDB();