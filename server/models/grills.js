const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const grillSchema = new Schema({
    name:{type:String},
    type:{type:String},
    description:{type:String},
    price:{type:String},
})

module.exports = mongoose.model('Grills',grillSchema);