import mysql = require('mysql');

export default class Mysql {

  private static _instance: Mysql;
  
  cnn: mysql.Connection;
  conectado: boolean = false;

  constructor () {
      console.log('Clase inicializada');
      
      this.cnn = mysql.createConnection({
        host: '34.66.212.9', // Localhost,  35.202.222.43
        user: 'root', // root
        password: 'systemas', // Ceutec-19, systemas
        database: 'mypimesdb', //
        // multipleStatements: true


   });
  
    this.connectarDB();
 }

 public static get instace () {
   return this._instance || ( this._instance = new this() );
 }

 static ejecutarQuery( query: string, callback: Function ) {
   this.instace.cnn.query( query, ( err, results: object[], fields ) => {
    if (err) {
      console.log('A Sucedido el Siguente Error');
      console.log( err );
      return callback(err);
      }

      if( results.length === 0 ) {
        callback('el registro solicitado no existe');
      }else{
        callback(null, results);
      }
   });
 }

 private connectarDB() {
  this.cnn.connect( ( err: mysql.MysqlError ) => {
     if(err){
        console.log(err.message);
        return;
     } 
     this.conectado = true;
     console.log('Base de datos Online');
  });
 }

// const connection = mysql.createConnection({
//     host: '35.202.222.43', // Localhost,  35.202.222.43
//     user: 'root', // root
//     password: 'systemas', // Ceutec-19, systemas
//     database: 'mypimesdb', //
//     multipleStatements: true
// });
}