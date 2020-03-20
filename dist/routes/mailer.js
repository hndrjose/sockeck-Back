"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
// export class GMailService { 
//   private _transporter: nodemailer.Transporter; 
//   constructor() { 
//     this._transporter = nodemailer.createTransport( 
//       `smtps://jmendoza.hndr@gmail.com:Caramel-1580` 
//     ); 
//   } 
//   sendMail(to: string, subject: string, content: string) { 
//     let options = { 
//       from: 'from_test@gmail.com', 
//       to: to, 
//       subject: subject, 
//       text: content 
//     } 
//     this._transporter.sendMail(  
//       options, (error, info) => { 
//         if (error) { 
//           return console.log(`error: ${error}`); 
//         } 
//         console.log(`Message Sent ${info.response}`); 
//       }); 
//   } 
// } 
const confi_1 = __importDefault(require("../global/confi"));
class Mail {
    constructor(to, subject, message) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    sendMail() {
        let mailOptions = {
            from: "portalband@band.com.br",
            to: this.to,
            subject: this.subject,
            html: this.message
        };
        const transporter = nodemailer.createTransport({
            host: confi_1.default.host,
            port: confi_1.default.port,
            secure: false,
            auth: {
                user: confi_1.default.user,
                pass: confi_1.default.password
            },
            tls: { rejectUnauthorized: false }
        });
        console.log(mailOptions);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            }
            else {
                return "E-mail enviado com sucesso!";
            }
        });
    }
}
exports.default = new Mail;
