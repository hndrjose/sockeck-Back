
import express from 'express';
import path = require('path');
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';



export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;


    private constructor() {

        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
        this.io = socketIO( this.httpServer );

        this.escucharSockets();
    }

    private distfolder() {
        const pubclipath = path.resolve(__dirname, '../public');

        this.app.use( express.static(pubclipath) );
    }

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    }


    private escucharSockets() {

        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', cliente => {

            console.log('Cliente conectado');

            // Conectar cliente
            socket.conectarCliente( cliente );


            // Mensajes
            socket.mensaje( cliente, this.io );  // <=== , this.io 

            // Desconectar
            socket.desconectar( cliente );  

            // usuario
            socket.configurarusuario(cliente, this.io);

        });

    }


    start( callback: Function ) {

        this.httpServer.listen( this.port);   // < ===, callback 
        this.distfolder();

    }

}