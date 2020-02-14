const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    link: String,
    imageLink:String,
    date: {
        type:Date,
        default:Date.now
    },
})
module.exports = mongoose.model('Projects', ProjectSchema);