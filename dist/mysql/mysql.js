"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: '34.66.212.9',
            user: 'root',
            password: 'systemas',
            database: 'mypimesdb',
        });
        this.connectarDB();
    }
    static get instace() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instace.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('A Sucedido el Siguente Error');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('el registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    connectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos Online');
        });
    }
}
exports.default = Mysql;
