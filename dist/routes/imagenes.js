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
const Imges = express_1.Router();
Imges.use(express_fileupload_1.default());
//////////////////////PROCEDIMIENTOS ARCHIVOS ////////////////////////////
Imges.put('/imagenes/:Id', (req, res) => {
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
    var nombbreArchivo = `${Id}-${new Date().getMilliseconds()}.${extencion}`;
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
        subirarchivo(Id, nombbreArchivo, res);
    });
});
function subirarchivo(Id, nombbreArchivo, res) {
    const query = "SELECT Cedula, img FROM empleado WHERE Cedula = ?";
    mysql_1.default.ejecutarQuery(query, (err, image) => {
        if (err) {
            console.log("No existe el Empleado " + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        var pathviejo = './imagen/' + image[0].img;
        console.log(pathviejo);
        //Si exite elimina la imagen anterior
        if (fs.existsSync(pathviejo)) {
            fs.unlinkSync(pathviejo);
        }
    });
    const img = nombbreArchivo;
    const query1 = "UPDATE usuario SET img = ? WHERE Iduser = ?";
    mysql_1.default.ejecutarQuery(query1, (err, image) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        res.end();
        console.log("Empleadp Modificado");
    });
    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html
}
Imges.get('/imagenaudiometria/:img', (req, res) => {
    var img = req.params.img;
    const pathImagen = path.resolve(__dirname, `./src/imagen/${img}`);
    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    }
    else {
        var pahtnoimagen = path.resolve(__dirname, `./nomimg/noimage.png`);
        res.sendFile(pahtnoimagen);
    }
});
exports.default = Imges;
