const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetupSchema = new Schema(
  {
    setup:String,
    manufacturer:String,
    model:String,
    controller:String,
    spindle_type:String,
    spindle_speed:Number,
    spindle:String,
    options: Array,
  },
  { timestamps: true }



);

module.exports = mongoose.model("Setup", SetupSchema);
