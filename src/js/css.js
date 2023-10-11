const menumobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
let alterado = false; // Variável para rastrear o estado de alteração

menumobile.addEventListener('click', () => {
    // Verifica o estado atual (alterado ou não)
    if (alterado) {
        // Reverte as alterações
        const imagem = document.createElement('img');
        imagem.src = "src/img/palmeiras.svg";
        imagem.classList.add("rounded-circle");
        imagem.width = 50;
        imagem.alt = 0;
        menumobile.appendChild(imagem);

        // Remove a classe "bi-x" (sem espaços)
        menumobile.classList.remove('bi-x');
        body.classList.remove('menu-nav-active');

        // Reverte o background-color e a cor do texto aos valores originais
        menumobile.style.backgroundColor = ''; // Deixa vazio para usar o estilo padrão
        menumobile.style.color = ''; // Deixa vazio para usar o estilo padrão
    } else {
        // Remove a imagem
        const imagem = menumobile.querySelector('img');
        if (imagem) {
            imagem.remove();
        }

        // Adiciona a classe "bi-x" (sem espaços)
        menumobile.classList.add('bi-x');
        menumobile.style.borderRadius = '50%';

        // Define um background-color e uma cor de texto
        menumobile.style.backgroundColor = '#149ddd';
        menumobile.style.color = 'blue';
        body.classList.toggle('menu-nav-active');
    }

    // Inverte o estado atual
    alterado = !alterado;
});

// Tela no max-width 1024px
function verificarLarguraTela() {
    const larguraTela = window.innerWidth;
    const elemento = document.querySelector('.nooo#nav-bar'); // Substitua 'seu-elemento' pela classe do elemento que você deseja ocultar

    if (larguraTela <= 1024) {
        elemento.classList.add('d-none');
    } else {
        elemento.classList.remove('d-none');
    }
}
setInterval(verificarLarguraTela, 1); // Verifica a largura da tela a cada 1 milissegundo
verificarLarguraTela(); // Chama a função uma vez para configurar o estado inicial