const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const ProductSchema = mongoose.Schema({
    categoryBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        sale_price: {
            type: Number,
            require: true
        },
        list_price: {
            type: Number,
            require: true
        }
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    img: {
        data: Buffer,
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
},  { timestamps: true })

ProductSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Posts', ProductSchema)