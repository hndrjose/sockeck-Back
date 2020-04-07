import fileupload from 'express-fileupload'
import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';
import * as fs from 'fs'
import * as path from 'path'
const Upimg = Router();

Upimg.use(fileupload());

//////////////////////PROCEDIMIENTOS ARCHIVOS ////////////////////////////
Upimg.put('/imagenes/:Iduser', (req: Request, res: Response) => {
    // var tipo = req.params.tipo;
    var Iduser = req.params.Iduser;

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No selecciono nada',
            errors: { message: "Debe de seleccionar una Imagen" }
        });
    }
    //obtener nombre del archivo
    var archivo: any = req.files.imge;
    console.log(archivo);
    var nombrecortado = archivo.name.split('.');
    var extencion = nombrecortado[nombrecortado.length - 1];
    //solo extenciones permitidas
    var extencionesvalidas = ['jpg', 'png', 'gif'];
    if (extencionesvalidas.indexOf(extencion) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extencion no valida',
            errors: { message: 'Las Extenciones son:' + extencionesvalidas.join(', ') }
        });
    }
    //Nombre del archivo personalizado
    var nombbreArchivo = `${ Iduser }-${ new Date().getMilliseconds() }.${ extencion }`;

    // //mover el archivo del temporal a un path
    console.log('el nombre del archivo ' + nombbreArchivo);
    var path = `./dist/imagen/${ nombbreArchivo }`;
    console.log('moviendo img ' + path);
    archivo.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err
            });
        }
        console.log('archivo subido');
        subirarchivo(Iduser, nombbreArchivo, res);
    });

});

function subirarchivo(Id: number, nombbreArchivo: string, res: any) {

    const query = `SELECT Iduser, img FROM usuario WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query, ( err: any, image: any ) => {
        if (err) {
            console.log("No existe el Empleado " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        var pathviejo = './dist/imagen/' + image[0].img;
        //Si exite elimina la imagen anterior
        if (fs.existsSync(pathviejo)) {
            fs.unlinkSync(pathviejo);
        }
    });

    const img = nombbreArchivo;
    console.log(nombbreArchivo);
    const query1 = `UPDATE usuario SET img = '${ img }' WHERE Iduser = ${ Id }`
    Mysql.ejecutarQuery(query1, ( err: any, image: any ) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err)
            res.sendStatus(500)
            res.end()
            return
        }
        
        const query2 = `SELECT * FROM usuario WHERE Iduser = ${ Id }`
        Mysql.ejecutarQuery(query2, ( err: any, usuario: any ) => {
            if (err) {
                console.log("No existe el Empleado " + err)
                res.sendStatus(500)
                res.end()
                return
            }
            res.status(200).json({
                ok: true,
                usuarios: usuario
            });
            res.end()
         });
    });
    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html
}

Upimg.get('/verimagen/:img', (req: Request, res: Response) => {

    var img = req.params.img;


    //  const pathImagen = path.resolve(__dirname, `./imagen/${img}`);
    //  if (fs.existsSync(pathImagen)) 
    var pathImagen = path.join(__dirname, '../imagen', img);
    // fs.exists(pathImagen, existe => {
    //     if (!existe) {
    //         let pathnot = 'no-img.jpg';
    //         res.sendFile(path.join(__dirname, '../assets', pathnot)); // path = './assets/no-img.jpg';
    //     }
    //     res.sendFile(path.join(__dirname, '../imagen', pathImagen));
    //     //  res.sendfile(path);
    // });
    console.log(pathImagen);
    fs.exists(pathImagen, existe => {
        if (!existe) {
            //   console.log('No existe');
            pathImagen = path.join(__dirname, '../imagen', 'no-img.jpg');
        }
        res.sendFile(pathImagen);
    });
});


///////////////////  IMAGENES DE GALERIA / ////////////////////////////


Upimg.put('/imggaleria/:Iduser', (req: Request, res: Response) => {
    // var tipo = req.params.tipo;
    var Iduser = req.params.Iduser;
    var fecha = new Date();
    var fecha2 = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No selecciono nada',
            errors: { message: "Debe de seleccionar una Imagen" }
        });
    }
    //obtener nombre del archivo
    var archivo: any = req.files.img;
    console.log(archivo);
    var nombrecortado = archivo.name.split('.');
    var extencion = nombrecortado[nombrecortado.length - 1];
    //solo extenciones permitidas
    var extencionesvalidas = ['jpg', 'png', 'gif'];
    if (extencionesvalidas.indexOf(extencion) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extencion no valida',
            errors: { message: 'Las Extenciones son:' + extencionesvalidas.join(', ') }
        });
    }
    //Nombre del archivo personalizado
    var nombbreArchivo = `${ Iduser }-${ new Date().getMilliseconds() }.${ extencion }`;

    // //mover el archivo del temporal a un path
    var path = `./dist/galeria/${ nombbreArchivo }`;
    archivo.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err
            });
        }
        subirgaleria(Iduser, nombbreArchivo, fecha2, res);
    });

});

function subirgaleria(Id: number, nombbreArchivo: string, fecha: any, res: any) {
    console.log(fecha);
    // const query = `SELECT Iduser, img FROM usuario WHERE Iduser = ${ Id }`
    // Mysql.ejecutarQuery(query, ( err: any, image: any ) => {
    //     if (err) {
    //         console.log("No existe el Empleado " + err)
    //         res.sendStatus(500)
    //         res.end()
    //         return
    //     }
    //     var pathviejo = './imagen/' + image[0].img;
    //     //Si exite elimina la imagen anterior
    //     if (fs.existsSync(pathviejo)) {
    //         fs.unlinkSync(pathviejo);
    //     }
    // });

    const img = nombbreArchivo;
    const query1 = `INSERT INTO galerias(Iduser, archivo) VALUES(${ Id }, '${ img  }')`
    Mysql.ejecutarQuery(query1, ( err: any, galery: any ) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            okimg: true,
            galeria: galery
        });
        // console.log("Empleadp Modificado", results.affectedRows)
        // console.log("La imagen es: ", nombbreArchivo)
        res.end()
    });
    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html
}

Upimg.get('/vergaleria/:img', (req: Request, res: Response) => {

    var img = req.params.img;

    //  const pathImagen = path.resolve(__dirname, `./imagen/${img}`);
    //  if (fs.existsSync(pathImagen)) 

 
    var pathImagen = path.join(__dirname, '../galeria', img);

    console.log(pathImagen)
    fs.exists(pathImagen, existe => {
        if (!existe) {
            //   console.log('No existe');
            pathImagen = path.join(__dirname, '../imagen', 'no-img.jpg');
        }
        console.log(pathImagen);
        res.sendFile(pathImagen);
    });
});


Upimg.delete('/ElimImg/:img', (req: Request, res: Response) => {

    var img = req.params.img;
 
    var pathImagen = path.join(__dirname, '../galeria', img);

    console.log(pathImagen)
    fs.exists(pathImagen, existe => {
        if (!existe) {
            console.log('No existe');
        return res.status(200).json({
                ok: false,
                mensaje: 'No se encontro la Imagen'
            });
        }
        fs.unlinkSync(pathImagen);
        return res.status(200).json({
            ok: true,
            mensaje: 'Imagen Eliminada'
        });
    });
});


export default Upimg;
