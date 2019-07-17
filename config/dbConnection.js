var mysql = require('mysql');

var connMySQL = function(){
  //console.log('Conexao com o bd da aplicacao ok');
  return connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'portal_noticias'
  });
}

module.exports = function(){
    //console.log('conexao com o bd ok');
    return connMySQL;
}
