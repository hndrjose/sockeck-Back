import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const comentarios1 = Router();

//////////////////////PROCEDIMIENTOS COMENTARIOS ////////////////////////////

//  Obtener Comentario
comentarios1.get('/comentario', (req: Request, res: Response ) => {

    const query = `SELECT * FROM comentarios`;
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
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
        } else {
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
comentarios1.post('/crearComentario', (req: Request, res: Response ) => {

    //Conexion
    console.log("Tratando de crear un comentario nuevo..")

    const Idchat = req.body.Idchat;
    const Iduser = req.body.Iduser;
    const fecha = req.body.fecha;
    const comentario = req.body.comentario;
    const Idactividad = req.body.Idactividad;
    const origen = req.body.origen;
    const Idorigen = req.body.Idorigen;
    const Hora = req.body.Hora;

    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO comentarios (Idchat, comentario, fecha, Iduser, Idactividad, origen, Idorigen, Hora)   VALUES  ('${ Idchat }', '${ comentario }',  '${ fecha }', ${ Iduser }, ${ Idactividad }, '${ origen }',  ${Idorigen}, '${Hora}')`
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
        if (err) {
            console.log("Error al agregar nuevo Comentario: " + err)
            res.sendStatus(500)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        res.end()

    })
})


//Editar Comentario
comentarios1.put('/editarcomentario/:Iduser', (req: Request, res: Response ) => {

    //Conexion
    console.log("Tratando de editar un registro..")
    console.log("Cedula: " + req.params.Iduser)

    const Iduser = req.body.Iduser
    const fecha = req.body.fecha
    const comentario = req.body.comentario

    const query = `UPDATE comentarios SET fecha = '${ fecha }', comentario = '${ comentario }' WHERE Iduser = ${ Iduser }`;
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
        if (err) {
            console.log("Error al editar un Comentario: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: comentario
        });
        res.end()
    })
})

//Eliminar Usuario
comentarios1.delete('/borrarComentario/:Id', (req: Request, res: Response ) => {
    console.log("Eliminar Usuario con id: " + req.params.Id)
        //Conexion

    const Id = req.params.Id
    const query = `DELETE FROM comentarios WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
        if (err) {
            console.log("No existe el Usuario " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Comentario Eliminado")
        res.json(comentario)
    })
});

//Seleccionar Usuario
comentarios1.get('/SelecComentario/:Iduser', (req: Request, res: Response ) => {
    console.log("Seleccionar registro con id: " + req.params.Iduser);

    var porcentaje;
    //Conexion
    const Id = req.params.Iduser;
    const query = `SELECT * FROM comentarios WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
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
comentarios1.get('/SelecComentPed/:Idactividad/:Idorigen', (req: Request, res: Response ) => {
    //Conexion
    const Idactividad = req.params.Idactividad;
    const Idorigen = req.params.Idorigen
    const query = `SELECT usuario.Iduser, usuario.user, comentarios.fecha, comentarios.comentario, comentarios.Hora  FROM comentarios INNER JOIN usuario ON comentarios.Iduser = usuario.Iduser WHERE comentarios.Idactividad = ${ Idactividad } AND comentarios.Idorigen = ${Idorigen}  AND comentarios.origen = 'C'`
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
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
comentarios1.get('/SelecComentPerfil/:Idorigen', (req: Request, res: Response ) => {
    //Conexion
    const Idorigen = req.params.Idorigen;
    const query = `SELECT usuario.Iduser, usuario.user, comentarios.fecha, comentarios.comentario, comentarios.Hora  FROM comentarios INNER JOIN usuario ON comentarios.Iduser = usuario.Iduser WHERE comentarios.Idorigen = ${ Idorigen } AND comentarios.origen = 'P'`
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
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
comentarios1.post('/SelecRespComentario', (req: Request, res: Response ) => {

    var porcentaje;
    //Conexion
    const Idpedido = req.body.Idpedido;
    const Idchat = req.body.Idchat;
    const query = `SELECT usuario.Iduser, usuario.user, comentarios.fecha, comentarios.comentario FROM mypimesdb.comentarios INNER JOIN mypimesdb.pedidos ON comentarios.Idpedido = pedidos.Idpedido INNER JOIN mypimesdb.usuario ON comentarios.Iduser = usuario.Iduser WHERE comentarios.Idpedido = ${ Idpedido } AND comentarios.Idchat = ${ Idchat }`
    Mysql.ejecutarQuery(query, ( err: any, comentario: object[] ) => {
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



export default comentarios1;