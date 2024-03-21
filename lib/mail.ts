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
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
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
