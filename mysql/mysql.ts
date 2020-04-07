import mysql = require('mysql');
 
export default class Mysql {
 
  private static _instance: Mysql;
  
  cnn: mysql.Pool;
  conectado: boolean = false;
 
  constructor () {
      console.log('Clase inicializada');
      
      this.cnn = mysql.createPool({
        host: '35.202.222.43',  //'34.66.212.9', // Localhost,  35.202.222.43
       // socketPath: `/cloudsql/crucial-accord-261801:us-central1:mypimesdb`,
        user: 'root', // root
        password: 'systemas', // Ceutec-19, systemas
        database: 'mypimesdb', //
        // multipleStatements: true
   });
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
 
// const connection = mysql.createConnection({
//     host: '35.202.222.43', // Localhost,  35.202.222.43
//     user: 'root', // root
//     password: 'systemas', // Ceutec-19, systemas
//     database: 'mypimesdb', //
//     multipleStatements: true
// });
}