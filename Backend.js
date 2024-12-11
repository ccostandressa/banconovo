app.post('/api/reset-password', (req, res) => {
    const { email } = req.body;
    const user = users.find((u) => u.email === email);

    if (!user) {
        console.log('Usuário não encontrado:', email);
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // Gerar token de redefinição
    const token = crypto.randomBytes(32).toString('hex');
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;
    console.log('Token gerado:', token);
    console.log('Link de redefinição:', resetLink);

    const mailOptions = {
        from: 'seu-email@gmail.com',
        to: email,
        subject: 'Redefinição de Senha',
        text: `Clique no link para redefinir sua senha: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
        }
        console.log('E-mail enviado:', info.response);
        res.status(200).json({ message: 'E-mail enviado com sucesso.' });
    });
});
