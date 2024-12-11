function sendResetLink() {
    const email = document.getElementById('email').value;

    fetch('http://localhost:3001/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = 'login.html'; // Redireciona para a página de login após envio do link
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o e-mail. Tente novamente mais tarde.');
    });

    return false; // Impede o envio real do formulário

}
