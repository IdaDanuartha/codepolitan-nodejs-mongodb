const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/db_ecommerce')
  .then(() => {
    console.log('Connected to database mongodb')
  })
  .catch(err => {
    console.error(err)
  })

const productSchema =new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ["S", "M", "L", "XL", "XXL", "XXXL"]
  },
  description: {
    type: String,
    required: true,
    min: 15,
  },
  condition: {
    type: String,
    required: true,
    enum: ["new", "old"],
    default: "new"
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  availability: {
    online: {
      type: Boolean,
      required: true
    },
    offline: {
      type: Boolean,
      required: true
    }
  },
})

const Product = mongoose.model('Product', productSchema)