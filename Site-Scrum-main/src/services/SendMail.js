import nodemailer from 'nodemailer';
import mailConfig from '../config/mail.js';
 
async function createNewUser(to) {
  try {
    const config = await mailConfig();
 
    const transporter = nodemailer.createTransport(config);
 
    const info = await transporter.sendMail({
      from: 'noreplay@email.com',
      to,
      subject: 'Conta criada na plataforma da Mentor Wise',
      text: `Conta criada com sucesso.\n\n`,
      html: `<h1>Conta criada com sucesso.</h1>\n\n`,
    });
 
    if (process.env.NODE_ENV === 'development') {
      console.log(`Send email: ${nodemailer.getTestMessageUrl(info)}`);
    }
  } catch (err) {
    throw new Error(err);
  }
}

async function Update(to) {
  try {
    const config = await mailConfig();
 
    const transporter = nodemailer.createTransport(config);
 
    const info = await transporter.sendMail({
      from: 'noreplay@email.com',
      to,
      subject: 'Senha atualizada com sucesso',
      text: `Senha atualizada com sucesso.\n\nCaso não tenha sido você sugerimos entrar em contato com o suporte da Mentor Wise.`,
      html: `<h1>Senha atualizada com sucesso.</h1>\n\n<p>Caso não tenha sido você, sugerimos entrar em contato com o suporte da Mentor Wise.</p>`,
    });
 
    if (process.env.NODE_ENV === 'development') {
      console.log(`Send email: ${nodemailer.getTestMessageUrl(info)}`);
    }
  } catch (err) {
    throw new Error(err);
  }
} 

export default { Update, createNewUser };
