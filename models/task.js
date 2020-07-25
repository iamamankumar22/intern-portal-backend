var mongoose = require("mongoose");
//options is mentor's ID 
var TaskSchema = new mongoose.Schema({
    username: {type : String},
    options:{type : Number},
    taskname:{type: String},
    enddate:{type:String},
    taskdetails:{type: String},
    complete:{type:Number,default:0}
});

module.exports = mongoose.model("Task", TaskSchema);

