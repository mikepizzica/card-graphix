
   
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/card-graphix',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

// card will be array of components

// id {
// obj/components
// each component will have an id (autogenerated)
// }
// 
// class {
  // class will be a string to add css 

// } style value (string)