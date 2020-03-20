import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const Randons = Router();

Randons.get('/randon', (req: Request, res: Response) => {

    var max = 99999
    var min = 1

    res.status(200).json({
        ok: true,
        randon: Math.round(Math.random() * (max - min) + min)
    });

});




Randons.get('/crypto', (req: Request, res: Response) => {

    var array = new Uint32Array(10);
    window.crypto.getRandomValues(array);

    console.log("Tus numeros de la suerte:");
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

});

export default Randons;