import nodemailer from 'nodemailer';
import { CONSTANTS } from './../mapper/constants';
export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: CONSTANTS.MAIL_USER,
      pass: CONSTANTS.MAIL_PASSWORD
    },
  });
  
  transporter.verify((error , success) => {
    if(error){
        console.log(error);
    }
    else {
        console.log("Mail Server Connected.....");
    }
})