var http = require('http');

var server = http.createServer(function(req, res){

  var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de Tecnologia</body></html>");
    }
        else if (categoria == '/moda'){
          res.end("<html><body>Portal de Moda</body></html>");
    }
      else if (categoria == '/beleza'){
        res.end("<html><body>Portal de beleza</body></html>");
    }
      else{
        res.end("<html><body>Portal de Noticia</body></html>");
    }
});
server.listen(3000);
