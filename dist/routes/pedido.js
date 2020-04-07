"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const Pedidoss = express_1.Router();
//////////////////////PROCEDIMIENTOS PEDIDOS ////////////////////////////
//Agregar data de pedido
Pedidoss.post('/adpedido', (req, res) => {
    //Conexion
    const valor = req.body.valor;
    const fecha = req.body.fecha;
    const Hora = req.body.Hora;
    const statuss = req.body.status;
    const deiduser = req.body.deiduser;
    const deuser = req.body.deuser;
    const descripcion = req.body.descripcion;
    const Iduser = req.body.Iduser;
    const visto = req.body.visto;
    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO pedidos (Iduser , valor, fecha, Hora, status, deiduser, deuser, descripcion, visto)   VALUES  (${Iduser}, ${valor}, '${fecha}', '${Hora}', '${statuss}', ${deiduser}, '${deuser}', '${descripcion}', '${visto}')`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err);
            res.sendStatus(500);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end();
    });
});
//Editar Data del PEDIDOS
Pedidoss.put('/editarpedido/:Iduser', (req, res) => {
    //Conexion
    console.log("Tratando de editar una registro..");
    console.log("Cedula: " + req.params.Iduser);
    const status = req.body.status;
    const Iduser = req.body.Iduser;
    const query = `UPDATE pedidos SET status = ${status} WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("Error al editar un Registro: " + err);
            res.sendStatus(400);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end();
    });
});
//Editar Data del PEDIDOSPROFECIONALES
Pedidoss.put('/editarpedidopro/:Idcomperfil', (req, res) => {
    //Conexion
    console.log("Tratando de editar una registro..");
    console.log("ID: " + req.params.Iduser);
    const status = req.body.status;
    const Idcomperfil = req.body.Idcomperfil;
    const query = `UPDATE pedidos SET status = ${status} WHERE Idcomperfil = ${Idcomperfil}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("Error al editar un Registro: " + err);
            res.sendStatus(400);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end();
    });
});
//Eliminar
Pedidoss.delete('/borrarpedido/:Id', (req, res) => {
    console.log("Eliminar registros con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `DELETE FROM pedidos WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("No existe el registro " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        console.log("registross Eliminado");
        res.json(pedio);
    });
});
//Seleccionar data por pedido
Pedidoss.get('/pedido/:idpedido', (req, res) => {
    //Conexion
    const idpedido = req.params.idpedido;
    //  const query = `SELECT * FROM pedidos WHERE pedidos.Idpedido = ${ idpedido }`
    const query = `SELECT usuario.Iduser, usuario.nombre, usuario.vocacion, pedidos.deuser, pedidos.fecha, pedidos.descripcion FROM mypimesdb.pedidos INNER JOIN mypimesdb.usuario ON pedidos.Iduser = usuario.Iduser WHERE pedidos.Idpedido = ${idpedido}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            pedido: pedio[0]
        });
    });
});
//Seleccionar data por usuario
Pedidoss.get('/Selecpedidos/:deiduser', (req, res) => {
    //Conexion
    const deiduser = req.params.deiduser;
    const query = `SELECT pedidos.Idpedido, pedidos.Idactividad, usuario.img, pedidos.Iduser, usuario.nombre, usuario.user, pedidos.fecha, pedidos.Hora, pedidos.status, pedidos.valor, pedidos.descripcion FROM mypimesdb.pedidos INNER JOIN mypimesdb.usuario ON pedidos.Iduser = usuario.Iduser WHERE pedidos.deiduser = ${deiduser} AND status = 'pendiente'`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: (pedio)
        });
    });
});
//Seleccionar data por proveedor
Pedidoss.get('/Selecpedidospro/:Iduser', (req, res) => {
    //Conexion
    const Iduser = req.params.Iduser;
    const query = `SELECT  pedidos.Idpedido, pedidos.Idactividad, pedidos.deiduser, pedidos.deuser, pedidos.fecha, pedidos.Hora, pedidos.status, pedidos.valor, pedidos.descripcion, pedidos.visto FROM mypimesdb.pedidos INNER JOIN mypimesdb.usuario ON pedidos.Iduser = usuario.Iduser WHERE pedidos.Iduser = ${Iduser} AND status = 'pendiente'`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios: pedio
        });
    });
});
//Agregar data de pedido
Pedidoss.post('/adConteo', (req, res) => {
    //Conexion
    console.log('Ingresando la Id para Conteo: ' + req.body.Iduser);
    const Iduser = req.body.Iduser;
    const conteo = 0;
    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO Conteos (Iduser , userconteo)   VALUES(${conteo}, ${Iduser})`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err);
            res.sendStatus(500);
            return;
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end();
    });
});
//Contabilizar registros para Alerta
Pedidoss.get('/ContaReg/:Id', (req, res) => {
    var result;
    var anterior;
    var pendiente;
    var visto;
    const Id = req.params.Id;
    const query = `SELECT * FROM pedidos WHERE Iduser = ${Id} AND status = 'pendiente' AND visto = 'N'`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            res.status(200).json({
                ok: false,
                respuesta: 0
            });
            res.end();
            return;
        }
        const resultado = pedio.slice();
        result = resultado.length;
        console.log('Cantidad de Reg ' + result);
        // res.status(200).json({
        //      ok: true,
        //      respuesta: pedio[0].status
        // });
        const query1 = `SELECT userconteo FROM Conteos WHERE Iduser = ${Id}`;
        mysql_1.default.ejecutarQuery(query1, (err, pedio) => {
            if (err) {
                console.log("No se puede seleccionar " + err);
                res.sendStatus(500);
                res.end();
                return;
            }
            anterior = pedio[0].userconteo;
            var resultot = result - anterior;
            console.log('resultot es: ' + resultot);
            if (resultot <= 0) {
                console.log('El Resultado es 0');
                const query2 = `SELECT userconteo FROM Conteos WHERE Iduser = ${Id}`;
                mysql_1.default.ejecutarQuery(query2, (err, pedio) => {
                    if (err) {
                        res.sendStatus(500);
                        res.end();
                        return;
                    }
                    res.status(200).json({
                        ok: false,
                        respuesta: pedio[0].userconteo
                    });
                    res.end();
                });
            }
            else {
                console.log('EL Resultado es mayor que 0');
                const query3 = `UPDATE Conteos SET userconteo = ${resultot} WHERE Iduser = ${Id}`;
                mysql_1.default.ejecutarQuery(query3, (err, pedio) => {
                    if (err) {
                        console.log("No se puede Modificar el " + err);
                        res.sendStatus(500);
                        res.end();
                        return;
                    }
                    res.status(200).json({
                        ok: true,
                        resultado: pedio,
                        respuesta: resultot
                    });
                    console.log('Registro Actualizado');
                    res.end();
                });
            }
        });
    });
});
// Reiniciar contador de Alerta
Pedidoss.put('/ReiniContaReg/:Iduser', (req, res) => {
    const Iduser = req.params.Iduser;
    const conteo = 0;
    const visto = 'S';
    const query = `UPDATE Conteos SET userconteo = ${conteo} WHERE Iduser = ${Iduser}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("Error al editar un Registro: " + err);
            res.sendStatus(400);
            return;
        }
        const queryString1 = `UPDATE pedidos SET visto = '${visto}' WHERE Iduser = ${Iduser}`;
        mysql_1.default.ejecutarQuery(queryString1, (err, pedio) => {
            if (err) {
                console.log("Error al editar un Registro: " + err);
                res.sendStatus(400);
                return;
            }
            res.status(200).json({
                ok: true,
                respuesta: pedio
            });
            res.end();
        });
    });
});
//Mostrar trababajos activos
Pedidoss.get('/trabajopend/:Id', (req, res) => {
    console.log("contar registros con id: " + req.params.Id);
    //Conexion
    var result;
    var anterior;
    const Id = req.params.Id;
    const query = `SELECT * FROM pedidos WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("No existe el registro " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        const resultado = pedio.slice();
        result = resultado.length;
        const queryString1 = `SELECT userconteo FROM Conteos WHERE Iduser = ${Id}`;
        mysql_1.default.ejecutarQuery(query, (err, pedio) => {
            if (err) {
                console.log("No se puede seleccionar " + err);
                res.sendStatus(500);
                res.end();
                return;
            }
            anterior = pedio.userconteo;
            var resultot = result - anterior;
            console.log("el resultado es " + resultot);
            res.status(200).json({
                ok: true,
                respuesta: resultot
            });
        });
    });
});
Pedidoss.get('/sumarvalor/:Id', (req, res) => {
    console.log("sumar el valor del registros con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `SELECT sum(valor) as valor FROM pedidos WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("No se puede Realizar la operacion " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        // const resultado = rows.slice()
        // result = resultado.length
        res.status(200).json({
            ok: true,
            resultado: pedio[0].valor
        });
    });
});
Pedidoss.get('/trabajosclose/:Id', (req, res) => {
    console.log("sumar el valor del registros con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;
    const query = `SELECT Count(Iduser) as terminados FROM pedidos WHERE Iduser = ${Id} AND status = 'close'`;
    mysql_1.default.ejecutarQuery(query, (err, pedio) => {
        if (err) {
            console.log("No se puede Realizar la operacion " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        // const resultado = rows.slice()
        // result = resultado.length
        res.status(200).json({
            ok: true,
            terminados: pedio[0].terminados
        });
    });
});
exports.default = Pedidoss;
