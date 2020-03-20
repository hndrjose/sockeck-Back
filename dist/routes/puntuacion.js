"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const Puntuar = express_1.Router();
//////////////////////PROCEDIMIENTOS PUNTUACIONES ////////////////////////////
//Agregar
Puntuar.post('/crearpuntuacion', (req, res) => {
    //Conexion
    console.log("Tratando de crear un registro nuevo..");
    var scoret;
    const Iduser = req.body.Iduser;
    const puntuacion = req.body.puntuacion;
    const Idperfil = req.body.Idperfil;
    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO puntuaciones (Iduser, puntuacion, Idperfil)   VALUES (${Iduser}, ${puntuacion}, ${Idperfil})`;
    mysql_1.default.ejecutarQuery(query, (err, puntua) => {
        if (err) {
            console.log("Error al agregar nuevo registro: " + err);
            res.sendStatus(500);
            return;
        }
        const query1 = `SELECT score FROM dataperfil WHERE Iduser = ${Idperfil}`;
        mysql_1.default.ejecutarQuery(query1, (err, scoress) => {
            if (err) {
                console.log("No se puede seleccionar " + err);
                res.sendStatus(500);
                res.end();
                return;
            }
            scoret = scoress[0].score;
            var totascore = parseInt(scoret) + parseInt(puntuacion);
            console.log(totascore);
            const query2 = `UPDATE dataperfil SET score = ${totascore}  WHERE Iduser = ${Idperfil}`;
            mysql_1.default.ejecutarQuery(query2, (err, scdoress) => {
                if (err) {
                    console.log("No se puede seleccionar " + err);
                    res.sendStatus(500);
                    res.end();
                    return;
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
    mysql_1.default.ejecutarQuery(query, (err, puntua) => {
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
Puntuar.post('/addpuntuacion/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de editar un registro..");
    const Iduser = req.params.Iduser;
    const puntuacion = req.body.puntuacion;
    var tot;
    const query = `SELECT puntuacion, score FROM puntuaciones WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, puntua) => {
        if (err) {
            res.sendStatus(500);
            res.end();
            return;
        }
        var punt = Number(puntuacion);
        var anterior = puntua[0].puntuacion;
        var scor = puntua[0].score;
        function suma(num1, num2) {
            return num1 + num2;
        }
        tot = suma(anterior, punt);
        const query1 = `UPDATE puntuaciones  SET puntuacion = ${tot} WHERE Iduser = ${Iduser}`;
        mysql_1.default.ejecutarQuery(query1, (err, puntua) => {
            if (err) {
                console.log("Error al editar un Registro: " + err);
                res.sendStatus(400);
                return;
            }
            res.status(200).json({
                ok: true,
                respuesta: puntua.affectedRows
            });
            res.end();
        });
    });
});
exports.default = Puntuar;
