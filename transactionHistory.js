document.addEventListener('DOMContentLoaded', function() {
    const transactionList = document.getElementById('transactionList');

    // Simula transações obtidas de um backend ou local storage
    const transactions = [
        "Depósito: R$ 500,00",
        "Saque: R$ 200,00",
        "Transferência enviada: R$ 100,00 para usuário2",
        "Transferência recebida: R$ 150,00 de usuário1"
    ];

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = transaction;
        transactionList.appendChild(listItem);
    });
});
