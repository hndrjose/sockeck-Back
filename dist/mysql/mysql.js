"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createPool({
            // host: '35.202.222.43',  //'34.66.212.9', // Localhost,  35.202.222.43
            socketPath: `/cloudsql/crucial-accord-261801:us-central1:mypimesdb`,
            user: 'root',
            password: 'systemas',
            database: 'mypimesdb',
        });
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
}
exports.default = Mysql;
