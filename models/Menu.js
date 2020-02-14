const mongoose = require('mongoose');
const MenuSchema = mongoose.Schema({
    name:String,
    link:String
})
module.exports = mongoose.model('Menus', MenuSchema)