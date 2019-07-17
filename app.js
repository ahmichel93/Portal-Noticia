var app = require('./config/server');

var rotaNoticias = require('./app/router/noticias')(app);

var rotaHome = require('./app/router/home')(app);

var rotaFormInclusaoNoticia = require('./app/router/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log("Servidor ON");
});
