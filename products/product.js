const mongoose = require('mongoose')
const products = require('./products.json')

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
  price: {
    type: Number,
    required: true,
    min: [0, 'Nilai minimal adalah 0'],
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 15,
  },
  condition: {
    type: String,
    required: true,
    enum: ["baru", "lama"],
    default: "baru"
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Nilai minimal adalah 0'],
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

// Product.insertMany(products) 
Product.findOneAndUpdate({name: 'Kemeja Flanel'}, {
  "name": "Kemeja Flanel",
  "brand": "Hollister",
  "price": 750000,
  "color": "biru muda",
  "size": ["S", "M", "L"],
  "description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
  "condition": "baru",
  "stock": 25,
  "availability": {
    "online": true,
    "offline": true
  }
}, {new: true, runValidators: true}).then(result => {
  console.log(result)
}).catch(err => {
  console.error(err.errors.stock.properties.message) 
})