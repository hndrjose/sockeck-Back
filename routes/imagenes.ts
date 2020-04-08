import fileupload from 'express-fileupload'
import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';
import * as fs from 'fs'
import * as path from 'path'
const Imges = Router();

Imges.use(fileupload());


//////////////////////PROCEDIMIENTOS ARCHIVOS ////////////////////////////
Imges.put('/imagenes/:Id', (req: Request, res: Response) => {

    // var tipo = req.params.tipo;
    var Id = req.params.Id;


    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No a selecciono nada',
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
    var nombbreArchivo = `${ Id }-${ new Date().getMilliseconds() }.${ extencion }`;

    // //mover el archivo del temporal a un path
    var path = `./imagen/${ nombbreArchivo }`;
    archivo.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err

            });
        }
        subirarchivo(Id, nombbreArchivo, res);
    });

});

function subirarchivo(Id: string, nombbreArchivo: string, res: any) {

    const query = "SELECT Cedula, img FROM empleado WHERE Cedula = ?"
    Mysql.ejecutarQuery(query, ( err: any, image: any ) => {
        if (err) {
            console.log("No existe el Empleado " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        var pathviejo = './imagen/' + image[0].img;
        console.log(pathviejo);
        //Si exite elimina la imagen anterior
        if (fs.existsSync(pathviejo)) {
            fs.unlinkSync(pathviejo);
        }
    });

    const img = nombbreArchivo;
    const query1 = "UPDATE usuario SET img = ? WHERE Iduser = ?"
    Mysql.ejecutarQuery(query1, ( err: any, image: any ) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err)
            res.sendStatus(500)
            res.end()
            return
        }

        res.end()
        console.log("Empleadp Modificado");
    });

    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html
}



Imges.get('/imagenaudiometria/:img', (req: Request, res: Response) => {

    var img = req.params.img;

    const pathImagen = path.resolve(__dirname, `./src/imagen/${img}`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        var pahtnoimagen = path.resolve(__dirname, `./nomimg/noimage.png`);
        res.sendFile(pahtnoimagen);
    }
});




export default Imges;