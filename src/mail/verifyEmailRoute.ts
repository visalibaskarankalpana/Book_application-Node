import path from 'path'
import ejs from 'ejs'
import { transporter } from "./transporter";

export const sendMail = async (name: string, mail:string) => {

    const templatePath = path.join(__dirname , '../View/common.ejs')

    const data = await ejs.renderFile(templatePath ,{name})

      // Send email using Nodemailer
      const mailOptions = {
        from: 'vishabas01@gmail.com', 
        to: mail, 
        subject: 'Login Attempt Notification',
        html: data
    };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email Sent Successfully:', info.response);
        }
      });
  
  }
  
