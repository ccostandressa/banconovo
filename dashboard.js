document.addEventListener('DOMContentLoaded', function() {
    const transferForm = document.getElementById('transferForm');

    transferForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const recipient = document.getElementById('recipient').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (recipient && amount > 0) {
            alert(`Transferência de R$ ${amount.toFixed(2)} realizada para ${recipient}.`);
            // Simulação de atualização de saldo (em um projeto real, você usaria uma chamada AJAX para o backend)
            document.getElementById('balance').textContent = (parseFloat(document.getElementById('balance').textContent) - amount).toFixed(2);
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});
