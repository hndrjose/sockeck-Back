import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const Pedidoss = Router();

//////////////////////PROCEDIMIENTOS PEDIDOS ////////////////////////////

//Agregar data de pedido
Pedidoss.post('/adpedido', (req: Request, res: Response) => {

    //Conexion
    const valor = req.body.valor
    const fecha = req.body.fecha
    const Hora = req.body.Hora
    const status = req.body.status
    const deiduser = req.body.deiduser
    const deuser = req.body.deuser
    const descripcion = req.body.descripcion
    const Iduser = req.body.Iduser
    const visto = req.body.visto


    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO pedidos (Iduser , valor, fecha, Hora, status, deiduser, deuser, descripcion, visto)   VALUES  (${ Iduser }, ${ valor }, '${ fecha }', '${ Hora }', '${ status }', ${ deiduser }, '${ deuser }', '${ descripcion }', '${ visto }')`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err)
            res.sendStatus(500)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end()

    })
})

//Editar Data del PEDIDOS
Pedidoss.put('/editarpedido/:Iduser', (req: Request, res: Response) => {

    //Conexion
    console.log("Tratando de editar una registro..")
    console.log("Cedula: " + req.params.Iduser)

    const status = req.body.status
    const Iduser = req.body.Iduser

    const query = `UPDATE pedidos SET status = ${ status } WHERE Iduser = ${ Iduser }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("Error al editar un Registro: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end()
    })
})



//Editar Data del PEDIDOSPROFECIONALES
Pedidoss.put('/editarpedidopro/:Idcomperfil', (req: Request, res: Response) => {

    //Conexion
    console.log("Tratando de editar una registro..")
    console.log("ID: " + req.params.Iduser)

    const status = req.body.status
    const Idcomperfil = req.body.Idcomperfil

    const query = `UPDATE pedidos SET status = ${ status } WHERE Idcomperfil = ${ Idcomperfil }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("Error al editar un Registro: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end()
    })
})

//Eliminar
Pedidoss.delete('/borrarpedido/:Id', (req: Request, res: Response) => {
    console.log("Eliminar registros con id: " + req.params.Id)
        //Conexion

    const Id = req.params.Id
    const query = `DELETE FROM pedidos WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("No existe el registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("registross Eliminado")
        res.json(pedio)
    })
});

//Seleccionar data por pedido
Pedidoss.get('/pedido/:idpedido', (req: Request, res: Response) => {
    //Conexion
    const idpedido = req.params.idpedido;
    const query = `SELECT * FROM pedidos WHERE pedidos.Idpedido = ${ idpedido }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
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
Pedidoss.get('/Selecpedidos/:deiduser', (req: Request, res: Response) => {
    //Conexion
    const deiduser = req.params.deiduser;
    const query = `SELECT pedidos.Idpedido, usuario.img, pedidos.Iduser, usuario.user, pedidos.fecha, pedidos.Hora, pedidos.status, pedidos.valor, pedidos.descripcion FROM mypimesdb.pedidos INNER JOIN mypimesdb.usuario ON pedidos.Iduser = usuario.Iduser WHERE pedidos.deiduser = ${ deiduser } AND status = 'pendiente'`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
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
Pedidoss.get('/Selecpedidospro/:Iduser', (req: Request, res: Response) => {
    //Conexion
    const Iduser = req.params.Iduser;
    const query = `SELECT  pedidos.Idpedido, pedidos.deiduser, pedidos.deuser, pedidos.fecha, pedidos.Hora, pedidos.status, pedidos.valor, pedidos.descripcion FROM mypimesdb.pedidos INNER JOIN mypimesdb.usuario ON pedidos.Iduser = usuario.Iduser WHERE pedidos.Iduser = ${ Iduser } AND status = 'pendiente'`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
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
Pedidoss.post('/adConteo', (req: Request, res: Response) => {
    //Conexion
    console.log('Ingresando la Id para Conteo: ' + req.body.Iduser)
    const Iduser = req.body.Iduser
    const conteo = 0

    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO Conteos (Iduser , userconteo)   VALUES(${ conteo }, ${ Iduser })`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err)
            res.sendStatus(500)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end()

    })
})



//Contabilizar registros para Alerta
Pedidoss.get('/ContaReg/:Id', (req: Request, res: Response) => {
    var result: any;
    var anterior: any;
    var pendiente: any;
    var visto: any;
    const Id = req.params.Id
    const query = `SELECT * FROM pedidos WHERE Iduser = ${ Id } AND status = 'pendiente' AND visto = 'N'`
    Mysql.ejecutarQuery(query, ( err: any, pedio: any[] ) => {
        if (err) {
          //  console.log(err)
         // res.sendStatus(500)
            res.status(200).json({
                ok: false,
                respuesta: 0
           });
            res.end()
            return
        }
        const resultado = pedio.slice();
        result = resultado.length;
        console.log('Cantidad de Reg ' + result);
        // res.status(200).json({
        //      ok: true,
        //      respuesta: pedio[0].status
        // });
      

        const query1 = `SELECT userconteo FROM Conteos WHERE Iduser = ${ Id }`
        Mysql.ejecutarQuery(query1, ( err: any, pedio: any ) => {
            if (err) {
                console.log("No se puede seleccionar " + err)
                res.sendStatus(500)
                res.end()
                return
            }

             anterior = pedio[0].userconteo;
             var resultot = result - anterior;
             console.log('resultot es: ' + resultot);

            if (resultot <= 0) {
                console.log('El Resultado es 0');
                const query2 = `SELECT userconteo FROM Conteos WHERE Iduser = ${ Id }`
                Mysql.ejecutarQuery(query2, ( err: any, pedio: any[] ) => {
                    if (err) {
                        res.sendStatus(500)
                        res.end()
                        return
                    }
                    res.status(200).json({
                        ok: false,
                        respuesta: pedio[0].userconteo
                    });
                    res.end()
                });
            } else {
                console.log('EL Resultado es mayor que 0');
                const query3 = `UPDATE Conteos SET userconteo = ${ resultot } WHERE Iduser = ${ Id }`
                Mysql.ejecutarQuery(query3, ( err: any, pedio: object[] ) => {
                    if (err) {
                        console.log("No se puede Modificar el " + err)
                        res.sendStatus(500)
                        res.end()
                        return
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
    })
});


// Reiniciar contador de Alerta
Pedidoss.put('/ReiniContaReg/:Id', (req: Request, res: Response) => {

    const Iduser = req.params.Iduser
    const conteo = 0
    const visto = 'S'

    const query = `UPDATE Conteos SET userconteo = ${ conteo } WHERE Iduser = ${ Iduser }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("Error al editar un Registro: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end()
    })

    const queryString1 = `UPDATE pedidos SET visto = '${ visto }' WHERE Iduser = ${ Iduser }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("Error al editar un Registro: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: pedio
        });
        res.end()
    })
})


//Mostrar trababajos activos
Pedidoss.get('/trabajopend/:Id', (req: Request, res: Response) => {
    console.log("contar registros con id: " + req.params.Id)
        //Conexion
    var result: any;
    var anterior;

    const Id = req.params.Id
    const query = `SELECT * FROM pedidos WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: object[] ) => {
        if (err) {
            console.log("No existe el registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        const resultado = pedio.slice()
        result = resultado.length

        const queryString1 = `SELECT userconteo FROM Conteos WHERE Iduser = ${ Id }`
        Mysql.ejecutarQuery(query, ( err: any, pedio: any ) => {
            if (err) {
                console.log("No se puede seleccionar " + err)
                res.sendStatus(500)
                res.end()
                return
            }
            anterior = pedio.userconteo;

            var resultot = result - anterior
            console.log("el resultado es " + resultot)
            res.status(200).json({
                ok: true,
                respuesta: resultot
            });
        })
    })
});

Pedidoss.get('/sumarvalor/:Id', (req: Request, res: Response) => {
    console.log("sumar el valor del registros con id: " + req.params.Id)
        //Conexion

    const Id = req.params.Id
    const query = `SELECT sum(valor) as valor FROM pedidos WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query, ( err: any, pedio: any ) => {
        if (err) {
            console.log("No se puede Realizar la operacion " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        // const resultado = rows.slice()
        // result = resultado.length
        res.status(200).json({
            ok: true,
            resultado: pedio[0].valor
        });
    })
});


Pedidoss.get('/trabajosclose/:Id', (req: Request, res: Response) => {
    console.log("sumar el valor del registros con id: " + req.params.Id)
        //Conexion

    const Id = req.params.Id
    const query = `SELECT Count(Iduser) as terminados FROM pedidos WHERE Iduser = ${ Id } AND status = 'close'`
    Mysql.ejecutarQuery(query, ( err: any, pedio: any ) => {
        if (err) {
            console.log("No se puede Realizar la operacion " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        // const resultado = rows.slice()
        // result = resultado.length
        res.status(200).json({
            ok: true,
            resultado: pedio[0].terminados
        });
    })
});

export default Pedidoss;