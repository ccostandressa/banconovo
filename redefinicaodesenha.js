const nodemailer = require('nodemailer');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// Cria o transportador de e-mail com as credenciais do Gmail
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER, // Usa a variável de ambiente para o e-mail
        pass: process.env.EMAIL_PASS, // Usa a variável de ambiente para a senha
    },
});

// Configuração do e-mail
const mailOptions = {
    from: process.env.EMAIL_USER, // E-mail de envio (também vem da variável de ambiente)
    to: 'exemplo@dominio.com', // E-mail do destinatário
    subject: 'Teste de E-mail', // Assunto do e-mail
    text: 'Este é um teste de envio de e-mail usando Nodemailer.', // Corpo do e-mail
};

// Envia o e-mail
transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
        console.error('Erro ao enviar o e-mail:', erro);
    } else {
        console.log('E-mail enviado com sucesso:', info.response);
    }
});
