const mongoose = require("mongoose");
const { type } = require("../schema");
const { date } = require("joi");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
      comment : {
        type : String,
      },

      rating : {
        type : Number,
        min : 1,
        max : 5,
      },
      
      createdAt : {
        type : Date,
        default : Date.now
      },
      author: {
        type : Schema.Types.ObjectId,
        ref: "User",
      },
});

module.exports = mongoose.model("Review",reviewSchema);