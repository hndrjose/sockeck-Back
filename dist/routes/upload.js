"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const Upimg = express_1.Router();
Upimg.use(express_fileupload_1.default());
//////////////////////PROCEDIMIENTOS ARCHIVOS ////////////////////////////
Upimg.put('/imagenes/:Iduser', (req, res) => {
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
    var archivo = req.files.imge;
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
    var nombbreArchivo = `${Iduser}-${new Date().getMilliseconds()}.${extencion}`;
    // //mover el archivo del temporal a un path
    var path = `./imagen/${nombbreArchivo}`;
    archivo.mv(path, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err
            });
        }
        subirarchivo(Iduser, nombbreArchivo, res);
    });
});
function subirarchivo(Id, nombbreArchivo, res) {
    const query = `SELECT Iduser, img FROM usuario WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query, (err, image) => {
        if (err) {
            console.log("No existe el Empleado " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        var pathviejo = './imagen/' + image[0].img;
        //Si exite elimina la imagen anterior
        if (fs.existsSync(pathviejo)) {
            fs.unlinkSync(pathviejo);
        }
    });
    const img = nombbreArchivo;
    const query1 = `UPDATE usuario SET img = ${img} WHERE Iduser = ${Id}`;
    mysql_1.default.ejecutarQuery(query1, (err, image) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        res.status(200).json({
            okimg: true,
            usuarios: nombbreArchivo
        });
        // console.log("Empleadp Modificado", results.affectedRows)
        // console.log("La imagen es: ", nombbreArchivo)
        res.end();
    });
    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html
}
Upimg.get('/verimagen/:img', (req, res) => {
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
    fs.exists(pathImagen, existe => {
        if (!existe) {
            //   console.log('No existe');
            pathImagen = path.join(__dirname, '../imagen', 'no-img.jpg');
        }
        console.log(pathImagen);
        res.sendFile(pathImagen);
    });
});
///////////////////  IMAGENES DE GALERIA / ////////////////////////////
Upimg.put('/imggaleria/:Iduser', (req, res) => {
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
    var archivo = req.files.img;
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
    var nombbreArchivo = `${Iduser}-${new Date().getMilliseconds()}.${extencion}`;
    // //mover el archivo del temporal a un path
    var path = `./dist/galeria/${nombbreArchivo}`;
    archivo.mv(path, (err) => {
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
function subirgaleria(Id, nombbreArchivo, fecha, res) {
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
    const query1 = `INSERT INTO galerias(Iduser, archivo) VALUES(${Id}, '${img}')`;
    mysql_1.default.ejecutarQuery(query1, (err, galery) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        res.status(200).json({
            okimg: true,
            galeria: galery
        });
        // console.log("Empleadp Modificado", results.affectedRows)
        // console.log("La imagen es: ", nombbreArchivo)
        res.end();
    });
    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html
}
Upimg.get('/vergaleria/:img', (req, res) => {
    var img = req.params.img;
    //  const pathImagen = path.resolve(__dirname, `./imagen/${img}`);
    //  if (fs.existsSync(pathImagen)) 
    var pathImagen = path.join(__dirname, '../galeria', img);
    console.log(pathImagen);
    fs.exists(pathImagen, existe => {
        if (!existe) {
            //   console.log('No existe');
            pathImagen = path.join(__dirname, '../imagen', 'no-img.jpg');
        }
        console.log(pathImagen);
        res.sendFile(pathImagen);
    });
});
Upimg.delete('/ElimImg/:img', (req, res) => {
    var img = req.params.img;
    var pathImagen = path.join(__dirname, '../galeria', img);
    console.log(pathImagen);
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
exports.default = Upimg;
