"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const DTperfil = express_1.Router();
//////////////////////PROCEDIMIENTOS PERFIL DE USUARIO////////////////////////////
//Agregar data del Perfil
DTperfil.post('/addDataPerfil', (req, res) => {
    //Conexion
    const competencias = req.body.competencias;
    const expLaboral = req.body.expLaboral;
    const conocimientos = req.body.conocimientos;
    const Iduser = req.body.Iduser;
    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO dataperfil (competencias, expLaboral, conocimientos, Iduser )   VALUES('${competencias}', '${expLaboral}', '${conocimientos}', ${Iduser})`;
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err);
            res.sendStatus(500);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: dtperfil
        });
        res.end();
    });
});
//Editar Data del Perfil
DTperfil.put('/editarDataPerfil/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de editar una empleado..");
    console.log("Cedula: " + req.params.Iduser);
    const competencias = req.body.competencias;
    const expLaboral = req.body.expLaboral;
    const conocimientos = req.body.conocimientos;
    const Iduser = req.body.Iduser;
    const query = `UPDATE dataperfil SET competencias = '${competencias}', expLaboral = '${expLaboral}', conocimientos= '${competencias}' WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            console.log("Error al editar un Registro: " + err);
            res.sendStatus(400);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: dtperfil
        });
        res.end();
    });
});
//Seleccionar data por id
DTperfil.get('/SelecDataPerfil/:Id', (req, res) => {
    console.log("Seleccionar Registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `SELECT * FROM dataperfil WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: (dtperfil)
        });
    });
});
//Seleccionar general
DTperfil.post('/SelecDataLike/:termino', (req, res) => {
    //Conexion
    console.log('realizando una busqueda');
    const termino = req.params.termino;
    const direccion = req.body.direccion;
    const page = req.query.page;
    const limit = req.query.limit;
    const startindex = (page - 1) * limit; //  ?page=1&limit=3
    const endindex = page * limit;
    console.log('termino es ' + req.params.termino);
    const query = `SELECT usuario.Iduser, usuario.nombre, usuario.img, usuario.vocacion, dataperfil.competencias, dataperfil.expLaboral FROM usuario INNER JOIN dataperfil ON usuario.Iduser = dataperfil.Iduser WHERE usuario.vocacion LIKE '%${termino}%' AND usuario.role = 'PROV'`; //  WHERE usuario.vocacion LIKE '%" + req.params.termino + "%' AND usuario.direccion = '${ direccion }'
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        // const resultado = rows.slice(startindex, endindex)
        res.status(200).json({
            ok: true,
            perfiles: dtperfil //.slice(startindex, endindex)
        });
    });
});
//Seleccionar parametros
DTperfil.post('/SelecparamLike/:termino', (req, res) => {
    //Conexion
    const termino = req.params.termino;
    const direccion = req.body.direccion;
    const page = req.query.page;
    const limit = req.query.limit;
    const startindex = (page - 1) * limit; //  ?page=1&limit=3
    const endindex = page * limit;
    console.log('termino es ' + req.params.termino);
    const query = `SELECT usuario.Iduser, usuario.nombre, usuario.img, usuario.vocacion, dataperfil.competencias, dataperfil.expLaboral FROM usuario INNER JOIN dataperfil ON usuario.Iduser = dataperfil.Iduser WHERE usuario.vocacion LIKE '%${termino}%' AND usuario.direccion = '${direccion}' AND usuario.role = 'PROV'`; //  WHERE usuario.vocacion LIKE '%" + req.params.termino + "%' 
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        // const resultado = rows.slice(startindex, endindex)
        res.status(200).json({
            ok: true,
            perfiles: dtperfil //.slice(startindex, endindex)
        });
    });
});
//Mostrar Fotos de Galeria
DTperfil.get('/datagaleria/:Id', (req, res) => {
    console.log("Seleccionar Registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `SELECT * FROM galerias WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: (dtperfil)
        });
    });
});
DTperfil.put('/adfechagalerya/:Id', (req, res) => {
    //Conexion
    const Id = req.params.Id;
    const fecha = req.body.fecha;
    const query = `UPDATE galerias SET fecha = ${fecha} WHERE Idgaleria = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: (dtperfil)
        });
    });
});
DTperfil.delete('/ElimArchivo/:Id', (req, res) => {
    console.log("Seleccionar Registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `DELETE FROM galerias WHERE Idgaleria = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, dtperfil) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: (dtperfil)
        });
    });
});
exports.default = DTperfil;
