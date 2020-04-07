import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const Puntuar = Router();

//////////////////////PROCEDIMIENTOS PUNTUACIONES ////////////////////////////

//Agregar
Puntuar.post('/crearpuntuacion', (req: Request, res: Response) => {

    //Conexion
    console.log("Tratando de crear un registro nuevo..")
    var scoret: any;
    const Iduser = req.body.Iduser;
    const puntuacion = req.body.puntuacion;
    const Idperfil = req.body.Idperfil;
        //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO puntuaciones (Iduser, puntuacion, Auser)   VALUES (${Iduser}, ${puntuacion}, ${Idperfil})`;
    Mysql.ejecutarQuery(query, ( err: any, puntua: any ) => {
        if (err) {
            console.log("Error al agregar nuevo registro: " + err)
            res.sendStatus(500)
            return
        }

        const query1 = `SELECT score FROM dataperfil WHERE Iduser = ${ Idperfil }`
        Mysql.ejecutarQuery(query1, ( err: any, scoress: any ) => {
            if (err) {
                console.log("No se puede seleccionar " + err)
                res.sendStatus(500)
                res.end()
                return
            }

            scoret = scoress[0].score;
            var totascore =  parseInt(scoret) + parseInt(puntuacion);
            console.log(totascore);
            const query2 = `UPDATE dataperfil SET score = ${ totascore }  WHERE Iduser = ${ Idperfil }`
            Mysql.ejecutarQuery(query2, ( err: any, scdoress: any ) => {
                if (err) {
                    console.log("No se puede seleccionar " + err)
                    res.sendStatus(500)
                    res.end()
                    return
                }
                res.status(200).json({
                    ok: true,
                    resultado: scdoress
                });
             });
      
    });
  });
});

//Buscar Puntuacion
Puntuar.get('/buscar/:Id', (req, res) => {
    console.log("Seleccionar registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `SELECT score FROM dataperfil WHERE Iduser = ${Id}`;
    Mysql.ejecutarQuery(query, ( err: any, puntua: object[] ) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            puntuacion: puntua[0]
        });
    });
});

//Sumar Puntuacion
Puntuar.post('/addpuntuacion/:Iduser', (req: Request, res: Response) => {
    //Conexion
    console.log("Tratando de editar un registro..")

    const Iduser = req.params.Iduser
    const puntuacion = req.body.puntuacion
    var tot;

    const query = `SELECT puntuacion, score FROM puntuaciones WHERE Iduser = ${Iduser}`
    Mysql.ejecutarQuery(query, ( err: any, puntua: any ) => {
        if (err) {
            res.sendStatus(500)
            res.end()
            return
        }
        var punt = Number(puntuacion);
        var anterior = puntua[0].puntuacion;
        var scor = puntua[0].score;

        function suma(num1: number, num2: number) {
            return num1 + num2;
        }

        tot = suma(anterior, punt);

        const query1 = `UPDATE puntuaciones  SET puntuacion = ${tot} WHERE Iduser = ${Iduser}`;
        Mysql.ejecutarQuery(query1, ( err: any, puntua: any ) => {
            if (err) {
                console.log("Error al editar un Registro: " + err)
                res.sendStatus(400)
                return
            }
            res.status(200).json({
                ok: true,
                respuesta: puntua.affectedRows
            });
            res.end()
        })

    })

})


export default Puntuar;