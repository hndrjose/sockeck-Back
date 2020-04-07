"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const ciudades = express_1.Router();
//  Obtener actividad
ciudades.get('/ciudades', (req, res) => {
    const query = `SELECT * FROM Ciudades `;
    mysql_1.default.ejecutarQuery(query, (err, ciudades) => {
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
        }
        else {
            return res.status(400).json({
                ok: false
            });
        }
    });
});
exports.default = ciudades;
