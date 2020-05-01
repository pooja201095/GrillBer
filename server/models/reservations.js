const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    userId:{type:String},
    grillId:{type:String},
    fromDate:{type:String},
    toDate:{type:String},
    fromTime:{type:String},
    toTime:{type:String},
    totalAmount:{type:String},
})

module.exports = mongoose.model('Reservation',reservationSchema);