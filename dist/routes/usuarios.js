"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const usuario = express_1.Router();
usuario.post('/logUser', (req, res) => {
    var user = req.body.user;
    var password = req.body.password;
    const query = `SELECT * FROM usuario WHERE user = '${user}' AND password = '${password}'`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(400).json({
                mensaje: "Credenciales Incorrectas",
                errors: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                usuarios: (usuario)
            });
        }
    });
});
usuario.get('/user', (req, res) => {
    const query = `SELECT * FROM usuario`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                usuarios: (usuario)
            });
        }
    });
});
usuario.post('/crearUsuario', (req, res) => {
    //Conexion
    console.log("Tratando de crear un usuario nuevo..");
    const user1 = req.body.user;
    const password1 = req.body.password;
    const email = req.body.email;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const vocacion = req.body.vocacion;
    const role = req.body.role;
    const ciudad = req.body.ciudad;
    const query = `INSERT INTO usuario (user, password, email, nombre, direccion, telefono, vocacion, role, Idciudad) VALUES('${user1}', '${password1}', '${email}', '${nombre}', '${direccion}', '${telefono}', '${vocacion}', '${role}', ${ciudad})`; // , direccion, telefono, vocacion, role   , 
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error al Incertar un Usuario",
                errors: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                usuarios: usuario
            });
        }
    });
});
usuario.put('/editarUsuario/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de editar un registro..");
    console.log("Cedula: " + req.params.Iduser);
    const Iduser = req.params.Iduser;
    const password1 = req.body.password;
    const email = req.body.email;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const vocacion = req.body.vocacion;
    const ciudad = req.body.ciudad;
    const query = `UPDATE usuario SET password = '${password1}', email = '${email}', nombre = '${nombre}', direccion = '${direccion}', telefono = '${telefono}', vocacion = '${vocacion}', ciudad = ${ciudad} WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            console.log("Error al editar un Usuario: " + err);
            res.sendStatus(400);
            return;
        }
        const query1 = `SELECT * FROM usuario WHERE Iduser = ${Iduser}`;
        mysql_1.default.ejecutarQuery(query1, (err, usuario) => {
            if (err) {
                console.log("No se puede seleccionar " + err);
                res.sendStatus(500);
                res.end();
                return;
            }
            res.status(200).json({
                ok: true,
                respuesta: usuario
            });
        });
    });
});
//Eliminar Usuario
usuario.delete('/borrarUsuario/:Id', (req, res) => {
    console.log("Eliminar Usuario con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `DELETE FROM usuario WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            console.log("No existe el Usuario " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        console.log("Usiario Eliminado");
        usuario;
    });
});
//Seleccionar Usuario
usuario.get('/SelecionUsuario/:Id', (req, res) => {
    console.log("Seleccionar registro con id: " + req.params.Id);
    var porcentaje;
    //Conexion
    const Id = req.params.Id;
    const query = `SELECT * FROM usuario WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: usuario[0]
        });
        //    res.json(rows)
    });
});
//Seleccionar Usuario LIKE
usuario.get('/likeusuario/:termino', (req, res) => {
    //Conexion
    const users = req.params.termino;
    const page = req.query.page;
    const limit = req.query.limit;
    const startindex = (page - 1) * limit;
    const endindex = page * limit;
    const query = `SELECT * FROM usuario WHERE user LIKE '%${users}%'`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        const resultado = usuario.slice(startindex, endindex);
        res.status(200).json({
            ok: true,
            usuarios: (resultado.length)
        });
    });
});
//Seleccionar Usuario LIKE
usuario.get('/SelecUser/:termino', (req, res) => {
    //Conexion
    const users = req.params.termino;
    const query = `SELECT * FROM usuario WHERE user Like '%${users}%'`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: usuario
        });
    });
});
usuario.post('/Modrole/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de crear un usuario nuevo..");
    const Iduser = req.params.Iduser;
    const role = req.body.role;
    const query = `UPDATE usuario SET role =${role} WHERE Iduser =${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error al Editar el Rol del Usuario",
                errors: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                usuarios: usuario
            });
        }
    });
});
usuario.post('/conteo', (req, res) => {
    //Conexion
    console.log("Tratando de crear un usuario nuevo..");
    const userconteo = req.body.userconteo;
    const Iduser = req.body.Iduser;
    const query = `INSERT INTO Conteos (userconteo, Iduser) VALUES (${userconteo}, ${Iduser})`;
    mysql_1.default.ejecutarQuery(query, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error al Editar el Rol del un Conteo",
                errors: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                usuarios: usuario
            });
        }
    });
});
exports.default = usuario;
