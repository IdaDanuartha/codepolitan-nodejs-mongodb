const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/db_movie')
  .then(() => {
    console.log('Connected to database mongodb')
  })
  .catch(err => {
    console.error(err)
  })

const movieSchema =new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String
})

const Movie = mongoose.model('Movie', movieSchema)

// find movies by criteria
// Movie.find({
//   year: {$gt: 2017}
// }).then(movie => {
//   console.log(movie) 
// }).catch(err => {
//   console.error(err)
// })


// Find one data
// Movie.findOne({
//   year: {$gt: 2018}
// }).then(movie => {
//   console.log(movie) 
// }).catch(err => {
//   console.error(err)
// })


// Update many data
// Movie.updateMany({
//   year: {$gte: 2018},
// }, {
//   score: 8
// }).then(movie => {
//   console.log(movie) 
// }).catch(err => {
//   console.error(err)
// })


// Find by id and update
// Movie.findByIdAndUpdate('6577205560a9f549183af9a2', {
//   score: 9.5
// }, {
//   new: true
// }).then(movie => {
//   console.log(movie) 
// }).catch(err => {
//   console.error(err)
// })


// Delete one data
// Movie.deleteOne({
//   year: {$gte: 2018},
// }, {
//   score: 8
// }).then(movie => {
//   console.log(movie) 
// }).catch(err => {
//   console.error(err)
// })


// Delete by id
// Movie.findByIdAndDelete('6577205560a9f549183af9a2').then(movie => {
//   console.log(movie) 
// }).catch(err => {
//   console.error(err)
// })


// Insert single data
// const movie = new Movie({
//   title: "Black Panther",
//   year: 2018,
//   score: 8.0,
//   director: "Ryan Coogler"
// })


// Insert many data
// const movies = Movie.insertMany([
//   {
//     title: "Black Panther",
//     year: 2018,
//     score: 8.0,
//     director: "Ryan Coogler"
//   },
//   {
//     title: "Avengers: End Game",
//     year: 2019,
//     score: 9.3,
//     director: "Evan Dash"
//   },
//   {
//     title: "Cek Toko Sebelah",
//     year: 2017,
//     score: 9.0,
//     director: "Ernest Prakasa"
//   },
// ]).then((movies) => {
//   console.log('data saved')
//   console.log(movies)
// }).catch(err => {
//   console.error(err)
// }) 