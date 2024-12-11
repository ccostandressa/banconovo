const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Carregar variáveis de ambiente

const app = express();
const port = 3001;

// Configurar o transporte do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.use(express.json()); // Para interpretar o corpo das requisições como JSON

// Rota para enviar o e-mail
app.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: text,
    };

    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar o e-mail:', error);
            return res.status(500).send('Erro ao enviar o e-mail');
        }
        console.log('E-mail enviado com sucesso:', info.response);
        res.status(200).send('E-mail enviado com sucesso!');
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

const cors = require('cors');
app.use(cors());
