const mongoose = require('mongoose');

const BrandName = mongoose.Schema({
    brandname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

let Brand = mongoose.model('brandname', BrandName)
module.exports=Brand