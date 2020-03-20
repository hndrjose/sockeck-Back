"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Randons = express_1.Router();
Randons.get('/randon', (req, res) => {
    var max = 99999;
    var min = 1;
    res.status(200).json({
        ok: true,
        randon: Math.round(Math.random() * (max - min) + min)
    });
});
Randons.get('/crypto', (req, res) => {
    var array = new Uint32Array(10);
    window.crypto.getRandomValues(array);
    console.log("Tus numeros de la suerte:");
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
});
exports.default = Randons;
