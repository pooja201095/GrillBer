const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    fromDate:String,
    toDate:String,
    fromTime:String,
    toTime:String,
    totalAmount:String,
})

module.exports = mongoose.model('Reservation',reservationSchema);