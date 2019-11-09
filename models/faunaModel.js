var mongoose  = require("mongoose");
var faunaSchema = new mongoose.Schema({
  User_name: String,
  Ad_name: String,
  Date: Date,
  Type_1: String,
  Type_2: String,
  Type_3: String,
  Sale_or_no: String,
  Price: Number,
  Keywords: Array
}, {"collection": "fauna"});

faunaSchema.statics.getKeywords = async function(tag){
  var data = await this.findOne().exec((data) => {
    console.log('data is', data);
    return data;
  });
  return data;
};

const DB = mongoose.connection.useDb('zoohack');
module.exports = DB.model('faunaModel', faunaSchema);