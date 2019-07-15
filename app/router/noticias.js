var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
  var connection = dbConnection();
  app.get('/noticias', function(req, res){

console.log(error);

    connection.query('select * from noticias', function(error, result){
        res.render ('noticias/noticias', {noticias : result});
    });
  });
};
