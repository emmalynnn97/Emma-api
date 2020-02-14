const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    content: Object,
    images: Object,
    date: {
        type:Date,
        default:Date.now
    },
})
module.exports = mongoose.model('Pages', PageSchema);