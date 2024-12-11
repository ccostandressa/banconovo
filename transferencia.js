// Função para navegar para outra página
function navigateTo(page) {
    window.location.href = page;
}

// Preenchendo os dados do usuário dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userName').textContent = 'João da Silva'; // Substitua por dados reais
    document.getElementById('accountNumber').textContent = '1234567890'; // Substitua por dados reais
    document.getElementById('userCPF').textContent = '123.456.789-00'; // Substitua por dados reais
});
// Função para buscar os dados do usuário de uma API
async function fetchUserData() {
    try {
        const response = await fetch('https://api.exemplo.com/dados-usuario');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do usuário');
        }
        const data = await response.json();
        document.getElementById('userName').textContent = data.nome;
        document.getElementById('accountNumber').textContent = data.numeroConta;
        document.getElementById('userCPF').textContent = data.cpf;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chama a função quando a página for carregada
document.addEventListener('DOMContentLoaded', fetchUserData);
