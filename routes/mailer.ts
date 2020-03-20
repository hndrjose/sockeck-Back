import * as nodemailer from 'nodemailer'; 
 
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

import confi from '../global/confi';


class Mail {

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string) { }


    sendMail() {

        let mailOptions = {
            from: "portalband@band.com.br",
            to: this.to,
            subject: this.subject,
            html: this.message
        };

        const transporter = nodemailer.createTransport({
            host: confi.host,
            port: confi.port,
            secure: false,
            auth: {
                user: confi.user,
                pass: confi.password
            },
            tls: { rejectUnauthorized: false }
        });


        console.log(mailOptions);

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            } else {
                return "E-mail enviado com sucesso!";
            }
        });
    }


}

export default new Mail;