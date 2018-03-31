var mongoose = require('mongoose');

console.log('Iniciando Database');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://root:root@ds021922.mlab.com:21922/clienteapi', function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('Mongo Conectado');
  }
});

module.exports = mongoose;
