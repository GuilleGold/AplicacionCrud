/* tendra todo mi codigo cdel servidor
tendra la vistas del front end 
como el codigo del servidor


este servira para poder "arrancar el servidor"

*/

const express = require('express');
//Initilizations
const app = express('path');
const exphbs=requier('express-handlebars')

// Settings
/*******UTILIDAD*******
1.- podemos configurar el motor de plantilas

2.-donde estan las vistas

3.- asuntos relacionados con
la aplicacion de manera general por ejemplo:
--FRAMKEWOKRS

PARA ESTE CASO 
-VAMOS A COLOCAR VISTASS o HTML
- tambien se configura la carpeta de videos 



2 este metdodo "path join" me permite unir directorios */
app.set('port',3000,process.env.PORT || 3000);
/*2 contana con la carpeta views 
esta linea de codigo me sirve para decirle que carpeta views est a qui , ya que aqui iran los archivos html , y 
3 
archivos handler bar necesita configudarse*/
app.set('views',path.join(__dirname, "'views"));
app.engine('.hbs',exphbs({
    defaultLaout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');
/* nombre como serian llamados  */




//Middlewares 
// Global Variables 
// Routes
// Statis Files
//Server is Listenning
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});
/* note en la terminal
*/