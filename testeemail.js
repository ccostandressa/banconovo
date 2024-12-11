const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andressac1173@gmail.com',
    pass: 'ldlw gqzu fgvg edbb'
  }
});

const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'destinatario@example.com',
    subject: 'Teste de E-mail',
    text: 'Este é um teste de envio de e-mail usando Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Erro ao enviar o e-mail:', error);
    } else {
        console.log('E-mail enviado com sucesso:', info.response);
    }
});
