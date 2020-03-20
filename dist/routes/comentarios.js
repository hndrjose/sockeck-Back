"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const comentarios1 = express_1.Router();
//////////////////////PROCEDIMIENTOS COMENTARIOS ////////////////////////////
//  Obtener Comentario
comentarios1.get('/comentario', (req, res) => {
    const query = `SELECT * FROM comentarios`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        //  res.json(rows)
        if (comentario.length > 0) {
            //   res.json(comentario);
            res.status(200).json({
                ok: true,
                respuesta: comentario
            });
        }
        else {
            return res.status(400).json({
                ok: false
                // mensaje: "No existe el Empleado ",
                //  errors: error
            });
        }
    });
});
//////////////////////PROCEDIMIENTOS USUARIOS ////////////////////////////
//Agregar Comentario
comentarios1.post('/crearComentario', (req, res) => {
    //Conexion
    console.log("Tratando de crear un comentario nuevo..");
    const Idchat = req.body.Idchat;
    const Iduser = req.body.Iduser;
    const fecha = req.body.fecha;
    const comentario = req.body.comentario;
    const Idpedido = req.body.Idpedido;
    const origen = req.body.origen;
    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO comentarios (Idchat, comentario, fecha,  Iduser, Idpedido, origen)   VALUES  ('${Idchat}', '${comentario}',  '${fecha}', ${Iduser}, ${Idpedido}, '${origen}')`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            console.log("Error al agregar nuevo Comentario: " + err);
            res.sendStatus(500);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        res.end();
    });
});
//Editar Empleado
comentarios1.put('/editarcomentario/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de editar un registro..");
    console.log("Cedula: " + req.params.Iduser);
    const Iduser = req.body.Iduser;
    const fecha = req.body.fecha;
    const comentario = req.body.comentario;
    const query = `UPDATE comentarios SET fecha = '${fecha}', comentario = '${comentario}' WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            console.log("Error al editar un Usuario: " + err);
            res.sendStatus(400);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        res.end();
    });
});
//Eliminar Usuario
comentarios1.delete('/borrarComentario/:Id', (req, res) => {
    console.log("Eliminar Usuario con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `DELETE FROM comentarios WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            console.log("No existe el Usuario " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        console.log("Usiario Eliminado");
        res.json(comentario);
    });
});
//Seleccionar Usuario
comentarios1.get('/SelecComentario/:Iduser', (req, res) => {
    console.log("Seleccionar registro con id: " + req.params.Iduser);
    var porcentaje;
    //Conexion
    const Id = req.params.Iduser;
    const query = `SELECT * FROM comentarios WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
    });
});
//Mostrar Comentarios por Pedidos
comentarios1.get('/SelecComentPed/:Idpedido', (req, res) => {
    //Conexion
    const Idpedido = req.params.Idpedido;
    const query = `SELECT usuario.Iduser, usuario.user, comentarios.fecha, comentarios.comentario  FROM comentarios INNER JOIN pedidos ON comentarios.Idpedido = pedidos.Idpedido INNER JOIN usuario ON comentarios.Iduser = usuario.Iduser WHERE comentarios.Idpedido = ${Idpedido} AND comentarios.Idchat = 0 AND comentarios.origen = 'C'`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        //    res.json(rows)
    });
});
//Mostrar Comentarios por Pedidos
comentarios1.get('/SelecComentPerfil/:Idpedido', (req, res) => {
    //Conexion
    const Idpedido = req.params.Idpedido;
    const query = `SELECT usuario.Iduser, usuario.user, comentarios.fecha, comentarios.comentario  FROM comentarios INNER JOIN pedidos ON comentarios.Idpedido = pedidos.Idpedido INNER JOIN usuario ON comentarios.Iduser = usuario.Iduser WHERE comentarios.Idpedido = ${Idpedido} AND comentarios.origen = 'P'`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        //    res.json(rows)
    });
});
//Mostrar Respuesto de Comentarios por Pedidos
comentarios1.post('/SelecRespComentario', (req, res) => {
    var porcentaje;
    //Conexion
    const Idpedido = req.body.Idpedido;
    const Idchat = req.body.Idchat;
    const query = `SELECT usuario.Iduser, usuario.user, comentarios.fecha, comentarios.comentario FROM mypimesdb.comentarios INNER JOIN mypimesdb.pedidos ON comentarios.Idpedido = pedidos.Idpedido INNER JOIN mypimesdb.usuario ON comentarios.Iduser = usuario.Iduser WHERE comentarios.Idpedido = ${Idpedido} AND comentarios.Idchat = ${Idchat}`;
    mysql_1.default.ejecutarQuery(query, (err, comentario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        //    res.json(rows)
    });
});
exports.default = comentarios1;
