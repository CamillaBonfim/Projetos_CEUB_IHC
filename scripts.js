// scripts.js

// Função para enviar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de confirmação
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    document.getElementById('form-contato').reset();
});