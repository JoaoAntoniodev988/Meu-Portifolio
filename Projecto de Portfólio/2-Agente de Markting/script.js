// 1. Buscamos o botão do Facebook no HTML usando o ID que criamos
const botaoConectar = document.getElementById('btn-facebook-connect');

// 2. Dizemos ao JavaScript para "ficar ouvindo" quando o usuário clicar no botão
botaoConectar.addEventListener('click', function() {
    
    // Mudar o visual do botão para simular o carregamento
    botaoConectar.innerHTML = 'Acessando o Meta Business...';
    botaoConectar.style.background = '#115cb8'; // Deixa o azul mais escuro
    botaoConectar.style.cursor = 'wait'; // Muda o ponteiro do mouse para "carregando"
    botaoConectar.disabled = true; // Desativa o botão para o usuário não clicar duas vezes

    // 3. Simular o tempo de resposta da API do Facebook (2 segundos)
    setTimeout(function() {
        
        // Guardamos uma informação no navegador dizendo que o usuário está conectado
        localStorage.setItem('usuarioConectado', 'true');
        
        // Redirecionamos o usuário para a tela do painel (vamos criar esse arquivo a seguir)
        window.location.href = 'painel.html';

    }, 2000); // 2000 milissegundos = 2 segundos
});