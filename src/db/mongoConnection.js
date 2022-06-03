const mongoose = require('mongoose')
const { mongoConnectionString } = require('../config')
const { Schema } = mongoose
mongoose.connect(mongoConnectionString)
// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open')
  })
    
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err)
  })
  
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
  })
  
  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination') 
      process.exit(0) 
    })
  })
  const fibonacciTicketSchema = new Schema({
    _id:  String,
    index: Number,
    fibonacciNumber: Number
  })
const FibonacciTicketSchema = mongoose.model("Showtime", fibonacciTicketSchema)
module.exports =  { FibonacciTicketSchema }