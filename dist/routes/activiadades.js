"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const actividad = express_1.Router();
//////////////////////PROCEDIMIENTOS COMENTARIOS ////////////////////////////
//  Obtener actividad
actividad.get('/actividad', (req, res) => {
    const query = `SELECT * FROM actividades `;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (actividad.length > 0) {
            res.status(200).json({
                ok: true,
                respuesta: actividad
            });
        }
        else {
            return res.status(400).json({
                ok: false
            });
        }
    });
});
actividad.post('/selecactividad/:Iduser/:Idusuario', (req, res) => {
    const Iduser = req.params.Iduser;
    const Idusuario = req.params.Idusuario;
    const query = `SELECT * FROM actividades WHERE Iduser = ${Iduser} AND Idusuario = ${Idusuario}`;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (actividad.length > 0) {
            res.status(200).json({
                ok: true,
                respuesta: actividad
            });
        }
        else {
            return res.status(400).json({
                ok: false
            });
        }
    });
});
actividad.get('/selecactividadUser/:Iduser', (req, res) => {
    const Iduser = req.params.Iduser;
    const query = `SELECT * FROM actividades WHERE Iduser = ${Iduser} AND Idusuario > 0`;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (actividad.length > 0) {
            res.status(200).json({
                ok: true,
                respuesta: actividad
            });
        }
        else {
            return res.status(400).json({
                ok: false
            });
        }
    });
});
actividad.get('/selecactividadID/:Idactividad', (req, res) => {
    const Idactividad = req.params.Idactividad;
    const query = `SELECT usuario.Iduser, usuario.nombre as nomuser, usuario.vocacion, actividades.nombre, actividades.fecha, actividades.descripcion, actividades.direccion, actividades.precio FROM mypimesdb.actividades INNER JOIN mypimesdb.usuario ON actividades.Iduser = usuario.Iduser WHERE actividades.Idactividad = ${Idactividad}`;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (actividad.length > 0) {
            res.status(200).json({
                ok: true,
                respuesta: actividad
            });
        }
        else {
            return res.status(400).json({
                ok: false
            });
        }
    });
});
//////////////////////PROCEDIMIENTOS USUARIOS ////////////////////////////
//Agregar actividad
actividad.post('/crearActividad', (req, res) => {
    //Conexion
    console.log("Tratando de crear una Actividad nueva..");
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const Iduser = req.body.Iduser;
    const Idusuario = req.body.Idusuario;
    const fecha = req.body.fecha;
    const direccion = req.body.direccion;
    const precio = req.body.precio;
    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO actividades (nombre, descripcion, Iduser, Idusuario, fecha, direccion, precio)   VALUES  ('${nombre}','${descripcion}', ${Iduser}, ${Idusuario},'${fecha}', '${direccion}', ${precio})`;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            console.log("Error al agregar nueva Actividad " + err);
            res.sendStatus(500);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: actividad
        });
        res.end();
    });
});
//Editar Actividad
actividad.put('/editaractividad/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de editar un registro..");
    console.log("Cedula: " + req.params.Iduser);
    const Iduser = req.params.Iduser;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const fecha = req.body.fecha;
    const query = `UPDATE comentarios SET fecha = '${fecha}' descripcion = '${descripcion}', precio = ${precio} WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            console.log("Error al editar una Actividad: " + err);
            res.sendStatus(400);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: actividad
        });
        res.end();
    });
});
//Eliminar Actividad
actividad.delete('/borrarActividad/:Id', (req, res) => {
    console.log("Eliminar Usuario con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `DELETE FROM actividades WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, actividad) => {
        if (err) {
            console.log("No existe el Usuario " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        console.log("Actividad Eliminada");
        res.json(actividad);
    });
});
exports.default = actividad;
