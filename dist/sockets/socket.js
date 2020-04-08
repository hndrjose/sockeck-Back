"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_lista_1 = require("../classes/usuario-lista");
const usuario_1 = require("../classes/usuario");
exports.usuariosConectados = new usuario_lista_1.UsuariosLista;
exports.conectarCliente = (cliente) => {
    const usuario = new usuario_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
};
exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        exports.usuariosConectados.borrarUsuario(cliente.id);
    });
};
// Escuchar mensajes
// export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {
exports.mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        // console.log('Mensaje recibido', payload );
        io.emit('mensaje-privado', payload);
    });
};
exports.configurarusuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        // console.log('Usuario', payload);
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.user);
        callback({
            ok: true,
            mensaje: `Usuario ${payload.user} fue configurado`
        });
    });
};
