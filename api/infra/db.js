var mongoose = require('mongoose');

console.log('Iniciando Database');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURL, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('Mongo Conectado');
  }
});

module.exports = mongoose;
