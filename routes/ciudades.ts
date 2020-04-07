import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const ciudades = Router();

//  Obtener actividad
ciudades.get('/ciudades', (req: Request, res: Response ) => {

    const query = `SELECT * FROM Ciudades `;
    Mysql.ejecutarQuery(query, ( err: any, ciudades: object[] ) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (ciudades.length > 0) {
            res.status(200).json({
                ok: true,
                respuesta: ciudades
            });
        } else {
            return res.status(400).json({
                ok: false
            });
        }
    });
});




export default ciudades;