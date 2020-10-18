const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CategorySchema = mongoose.Schema({
   
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
  
})
CategorySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Category', CategorySchema)