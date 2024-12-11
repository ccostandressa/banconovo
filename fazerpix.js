document.addEventListener('DOMContentLoaded', () => {
    // Adiciona event listeners para os botões
    document.getElementById('pagarButton').addEventListener('click', () => {
        navigateTo('pagar-pix.html');
    });
    document.getElementById('receberButton').addEventListener('click', () => {
        navigateTo('receber-pix.html');
    });
    document.getElementById('movimentacoesButton').addEventListener('click', () => {
        navigateTo('movimentacoes.html');
    });
    document.getElementById('minhasChavesPixButton').addEventListener('click', () => {
        navigateTo('minhas-chaves-pix.html');
    });
    document.getElementById('favoritosButton').addEventListener('click', () => {
        navigateTo('favoritos.html');
    });
    document.getElementById('limitesPixButton').addEventListener('click', () => {
        navigateTo('limites-pix.html');
    });
    document.getElementById('pixCopiaColaButton').addEventListener('click', () => {
        navigateTo('pix-copia-cola.html');
    });
    document.getElementById('suporteButton').addEventListener('click', () => {
        navigateTo('suporte.html');
    });
});

function navigateTo(page) {
    window.location.href = page;
}
