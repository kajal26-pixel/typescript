import crypto from 'crypto';
import nodemailer from 'nodemailer';


const SECRET='MY-WORK-KEY';

export const random=()=>crypto.randomBytes(128).toString('base64');
export const authentication=(salt:string,password:string)=>{
    return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest('hex')
    
}

export const genotp=()=>{
    return String(Date.now()).slice(-4)
}
// export const mail=(email:string,otp:string)=>{
//     console.log(email)
//     const transporter=nodemailer.createTransport({
//         service:'gmail',
//         host:'smtp.gmail.com',
//         secure:'true',
//         port:'4000',
//         auth:{
//             user:process.env.USER ,
//             pass:process.env.PASSWORD
//         }
//     })

//     var mailoptions={
//         from:process.env.USER,
//         to:email,
//         subject:'OTP',
//         text:otp
//     }

//     transporter.sendMail(mailoptions,(error:any,info:any)=>{
//         if(error) console.log(error)
//         else console.log('email sent'+info.response)
//     })
//     console.log('email sent successfully')
// }

