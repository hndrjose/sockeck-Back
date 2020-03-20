"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// import Rutas
const router_1 = __importDefault(require("./routes/router"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const pedido_1 = __importDefault(require("./routes/pedido"));
const mailer_1 = __importDefault(require("./routes/mailer"));
const puntuacion_1 = __importDefault(require("./routes/puntuacion"));
const upload_1 = __importDefault(require("./routes/upload"));
const dataPerfil_1 = __importDefault(require("./routes/dataPerfil"));
const comentarios_1 = __importDefault(require("./routes/comentarios"));
const server = server_1.default.instance;
// BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use(cors_1.default({ origin: 'https://tesis-front.web.app', credentials: true }));
// Rutas de servicios
server.app.use('/', router_1.default);
server.app.use('/', usuarios_1.default);
server.app.use('/', pedido_1.default);
server.app.use('/', puntuacion_1.default);
server.app.use('/', upload_1.default);
server.app.use('/', dataPerfil_1.default);
server.app.use('/', comentarios_1.default);
server.app.post('/formulario', (req, res) => {
    const message = Object.assign({}, req.body);
    mailer_1.default.to = message.to;
    mailer_1.default.subject = message.subject;
    mailer_1.default.message = message.message;
    let result = mailer_1.default.sendMail();
    // res.status(200).json({ 'result': result })
    res.status(200).send(true);
});
// Conecion de Base de Datos
// const mysql = new Mysql();
// Mysql.instace;
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
