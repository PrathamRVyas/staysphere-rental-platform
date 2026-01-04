const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listings.js");

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: "6956b94d19ee3e74fe0aefe2"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();