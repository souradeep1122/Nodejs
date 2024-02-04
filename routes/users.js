const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/hello");
const userchema = mongoose.Schema({
  name:String,
  roll:Number
});
module.exports = mongoose.model("data",userchema);