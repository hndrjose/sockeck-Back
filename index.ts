import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import Mysql from './mysql/mysql';

// import Rutas
import router from './routes/router';
import usuario from './routes/usuarios';
import Pedidoss from './routes/pedido';
import Mail from './routes/mailer';
import Puntuar from './routes/puntuacion';
import Upimg from './routes/upload';
import DTperfil from './routes/dataPerfil';
import comentarios1 from './routes/comentarios';



const server = Server.instance;

// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: 'https://3000-dot-11313237-dot-devshell.appspot.com/', credentials: true  }) );


// Rutas de servicios
server.app.use('/', router );
server.app.use('/', usuario );
server.app.use('/', Pedidoss);
server.app.use('/', Puntuar);
server.app.use('/', Upimg);
server.app.use('/', DTperfil);
server.app.use('/', comentarios1);

server.app.post('/formulario', (req, res) => {
    const message = Object.assign({}, req.body);
    Mail.to = message.to;
    Mail.subject = message.subject;
    Mail.message = message.message;
    let result = Mail.sendMail();
   // res.status(200).json({ 'result': result })
    res.status(200).send(
        true
    );
})


// Conecion de Base de Datos
// const mysql = new Mysql();
// Mysql.instace;

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});


