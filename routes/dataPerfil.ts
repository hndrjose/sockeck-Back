import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const DTperfil = Router();

//////////////////////PROCEDIMIENTOS PERFIL DE USUARIO////////////////////////////

//Agregar data del Perfil
DTperfil.post('/addDataPerfil', (req: Request, res: Response) => {

    //Conexion


    const competencias = req.body.competencias
    const expLaboral = req.body.expLaboral
    const conocimientos = req.body.conocimientos
    const Iduser = req.body.Iduser


    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const query = `INSERT INTO dataperfil (competencias, expLaboral, conocimientos, Iduser )   VALUES('${ competencias }', '${ expLaboral }', '${ conocimientos }', ${ Iduser })`;
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: object[] ) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err)
            res.sendStatus(500)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: dtperfil
        });
        res.end()

    })
})

//Editar Data del Perfil
DTperfil.put('/editarDataPerfil/:Iduser', (req: Request, res: Response) => {

    //Conexion
    console.log("Tratando de editar una empleado..")
    console.log("Cedula: " + req.params.Iduser)

    const competencias = req.body.competencias
    const expLaboral = req.body.expLaboral
    const conocimientos = req.body.conocimientos
    const Iduser = req.body.Iduser

    const query = `UPDATE dataperfil SET competencias = '${ competencias }', expLaboral = '${ expLaboral }', conocimientos= '${ competencias }' WHERE Iduser = ${ Iduser }`
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: object[] ) => {
        if (err) {
            console.log("Error al editar un Registro: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: dtperfil
        });
        res.end()
    })
})

//Seleccionar data por id
DTperfil.get('/SelecDataPerfil/:Id', (req: Request, res: Response) => {
    console.log("Seleccionar Registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;


    const query = `SELECT * FROM dataperfil WHERE Iduser = ${Id}`
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: any ) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            dataperfil: (dtperfil)
        });

    });
});

//Seleccionar general
DTperfil.get('/SelecDataLike/:termino/:Idciudad', (req: Request, res: Response) => {
    //Conexion
    console.log('realizando una busqueda');
    const termino = req.params.termino;
    const direccion = req.body.direccion;
    const idciudad = req.params.Idciudad;
    const page = req.query.page;
    const limit = req.query.limit;

    const startindex = (page - 1) * limit //  ?page=1&limit=3
    const endindex = page * limit
    console.log('termino es ' + req.params.termino);
    const query = `SELECT usuario.Iduser, usuario.nombre as nomuser, Ciudades.nombre, usuario.direccion, usuario.img, usuario.vocacion, dataperfil.competencias, dataperfil.expLaboral FROM usuario INNER JOIN dataperfil ON usuario.Iduser = dataperfil.Iduser INNER JOIN Ciudades ON usuario.Idciudad = Ciudades.Idciudad WHERE usuario.vocacion LIKE '%${ termino }%' AND usuario.role = 'PROV' AND usuario.Idciudad = ${idciudad}`    //  WHERE usuario.vocacion LIKE '%" + req.params.termino + "%' AND usuario.direccion = '${ direccion }'
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: any ) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: "No existe Registros en esta Ciudad",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            perfiles: dtperfil  //.slice(startindex, endindex)
        });

    });
});

//Seleccionar parametros
DTperfil.post('/SelecparamLike/:termino', (req: Request, res: Response) => { // 
    //Conexion
    const termino = req.params.termino;
    const direccion = req.body.direccion;
    const page = req.query.page;
    const limit = req.query.limit;

    const startindex = (page - 1) * limit //  ?page=1&limit=3
    const endindex = page * limit
    console.log('termino es ' + req.params.termino);
    const query = `SELECT usuario.Iduser, usuario.nombre, usuario.img, usuario.vocacion, dataperfil.competencias, dataperfil.expLaboral FROM usuario INNER JOIN dataperfil ON usuario.Iduser = dataperfil.Iduser WHERE usuario.vocacion LIKE '%${ termino }%' AND usuario.direccion = '${ direccion }' AND usuario.role = 'PROV'`    //  WHERE usuario.vocacion LIKE '%" + req.params.termino + "%' 
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: any ) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        // const resultado = rows.slice(startindex, endindex)
        res.status(200).json({
            ok: true,
            perfiles: dtperfil  //.slice(startindex, endindex)
        });

    });
});

DTperfil.get('/SelecpamanID/:idciudad', (req: Request, res: Response) => { // 
    //Conexion
    const idciudad = req.params.idciudad;
    const direccion = req.body.direccion;
    const page = req.query.page;
    const limit = req.query.limit;

    const startindex = (page - 1) * limit //  ?page=1&limit=3
    const endindex = page * limit
    console.log('termino es ' + req.params.termino);
    const query = `SELECT usuario.Iduser, usuario.nombre as nomuser, Ciudades.nombre, usuario.direccion, usuario.img, usuario.vocacion, dataperfil.competencias, dataperfil.expLaboral FROM usuario INNER JOIN dataperfil ON usuario.Iduser = dataperfil.Iduser INNER JOIN Ciudades ON usuario.Idciudad = Ciudades.Idciudad WHERE usuario.role = 'PROV' AND usuario.Idciudad = ${idciudad}`    //  WHERE usuario.vocacion LIKE '%" + req.params.termino + "%' 
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: any ) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        // const resultado = rows.slice(startindex, endindex)
        res.status(200).json({
            ok: true,
            perfiles: dtperfil  //.slice(startindex, endindex)
        });

    });
});



//Mostrar Fotos de Galeria
DTperfil.get('/datagaleria/:Id', (req: Request, res: Response) => {
    console.log("Seleccionar Registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;


    const query = `SELECT * FROM galerias WHERE Iduser = ${Id}`
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: object[] ) => {
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

DTperfil.put('/adfechagalerya/:Id', (req: Request, res: Response) => {
    //Conexion
    const Id = req.params.Id;
    const fecha = req.body.fecha;

    const query = `UPDATE galerias SET fecha = ${fecha} WHERE Idgaleria = ${Id}`
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: object[] ) => {
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

DTperfil.delete('/ElimArchivo/:Id', (req: Request, res: Response) => {
    console.log("Seleccionar Registro con id: " + req.params.Id);
    //Conexion
    const Id = req.params.Id;

    const query = `DELETE FROM galerias WHERE Idgaleria = ${Id}`
    Mysql.ejecutarQuery(query, ( err: any, dtperfil: object[] ) => {
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

export default DTperfil;