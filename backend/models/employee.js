const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  email: {
    type: String
  },
  idn: {
    type: Number
  },
  age: {
    type: String
  },
  nationality: {
    type: String
  },
  address: {
    type: String
  },
  
}, {
    collection: 'employees'
  })

module.exports = mongoose.model('Employee', employeeSchema)