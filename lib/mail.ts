import nodemailer, { Transporter } from "nodemailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT!),
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const domain = process.env.NEXT_PUBLIC_APP_URL;

// export const sendTwoFactorTokenEmail = async (
//   email: string,
//   token: string
// ) => {
//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "2FA Code",
//     html: `<p>Your 2FA code: ${token}</p>`
//   });
// };

// export const sendPasswordResetEmail = async (
//   email: string,
//   token: string,
// ) => {
//   const resetLink = `${domain}/auth/new-password?token=${token}`

//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "Reset your password",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
//   });
// };

// export const sendVerificationEmail = async (
//   email: string,
//   token: string
// ) => {
//   const confirmLink = `${domain}/auth/new-verification?token=${token}`;

//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "Confirm your email",
//     html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
//   });
// };

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/en/auth/new-verification?token=${token}`;

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Confirm your email",
    html:

   ` <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Email Confirmation</title>
       <style>
           body {
               font-family: Arial, sans-serif;
               background-color: #f4f4f4;
               margin: 0;
               padding: 0;
           }
           .container {
               max-width: 600px;
               margin: 20px auto;
               background-color: #fff;
               padding: 20px;
               border-radius: 5px;
               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
               text-align: center;
           }
          
           .button {
               display: inline-block;
               background-color: #ffffff;
               border: 1px solid;
               
               padding: 15px 30px;
               text-align: center;
              
               display: inline-block;
               font-size: 16px;
               border-radius: 8px;
               transition-duration: 0.4s;
               cursor: pointer;
           }
           
       </style>
   </head>
   <body>
       <div class="container">
           <h1>Email Confirmation</h1>
           <p>Thank you for signing up! Please confirm your email address by clicking the button below:</p>
           <a href="${confirmLink}" class="button">Confirm Email Address</a>
       </div>
   </body>
   </html>
   `

  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a>  to reset password.</p>`
  };

  await transporter.sendMail(mailOptions);
};


export const sendTwoFactorTokenEmail = async (email: string, token: string) => {

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`
  };

  await transporter.sendMail(mailOptions);
};
