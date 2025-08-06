// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('[data-tab-button]');
//     const questions = document.querySelectorAll('[data-faq-question]');
//     const heroSection = document.querySelector('.hero');
//     const alturaHero = heroSection.clientHeight;

//     // Lógica para o header ficar sólido ao rolar a página
//     window.addEventListener('scroll', function() {
//         const posicaoAtual = window.scrollY;
//         const header = document.querySelector('.header');

//         if (posicaoAtual > alturaHero) {
//             header.classList.add('header--is-solid');
//         } else {
//             header.classList.remove('header--is-solid');
//         }
//     });

////////////////////////////////////////////////////////////////////////////////////////////////////////


// document.addEventListener('DOMContentLoaded', function() {
//     // --- CORREÇÃO: Readicionando as declarações que estavam faltando ---
//     const buttons = document.querySelectorAll('[data-tab-button]');
//     const questions = document.querySelectorAll('[data-faq-question]');
//     // --- FIM DA CORREÇÃO ---

//     const heroSection = document.querySelector('.hero');
//     const alturaHero = heroSection.clientHeight;

//     // Lógica para o header ficar sólido ao rolar a página
//     window.addEventListener('scroll', function() {
//         const posicaoAtual = window.scrollY;
//         const header = document.querySelector('.header');

//         if (posicaoAtual > alturaHero) {
//             header.classList.add('header--is-solid');
//         } else {
//             header.classList.remove('header--is-solid');
//         }
//     });

//     // Seção de atrações, programação das abas
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function(botao) {
//             const abaAlvo = botao.target.dataset.tabButton;
//             const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
//             escondeTodasAbas();
//             aba.classList.add('shows__list--is-active');
//             removeBotaoAtivo();
//             botao.target.classList.add('shows__tabs__button--is-active');
//         })
//     }

//     // Seção FAQ, accordion
//     for (let i = 0; i < questions.length; i++) {
//         questions[i].addEventListener('click', abreOuFechaResposta);
//     }
// })

// function abreOuFechaResposta(elemento) {
//     const classe = 'faq__questions__item--is-open';
//     const elementoPai = elemento.target.parentNode;
//     elementoPai.classList.toggle(classe);
// }

// function removeBotaoAtivo() {
//     const buttons = document.querySelectorAll('[data-tab-button]');
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove('shows__tabs__button--is-active');
//     }
// }

// function escondeTodasAbas() {
//     const tabsContainer = document.querySelectorAll('[data-tab-id]');
//     for (let i = 0; i < tabsContainer.length; i++) {
//         tabsContainer[i].classList.remove('shows__list--is-active');
//     }
// }



document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Lógica para o header ficar sólido ao rolar a página (já está correta)
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        const header = document.querySelector('.header');

        if (posicaoAtual > alturaHero) {
            header.classList.add('header--is-solid');
        } else {
            header.classList.remove('header--is-solid');
        }
    });

    // ========= CORREÇÃO PRINCIPAL ABAIXO =========

    // Lógica das abas de personagens
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            // 1. Esconde todos os perfis de personagem
            escondeTodosPerfis();
            
            // 2. Exibe o perfil clicado
            aba.classList.add('character-profile--is-active');

            // 3. Remove a classe ativa de todos os botões
            removeBotaoAtivo();
            
            // 4. Adiciona a classe ativa apenas no botão clicado
            event.target.classList.add('characters__tabs__button--is-active');
        });
    }
    
    // Seção FAQ, accordion (não precisa mexer)
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        // Usa a classe correta do SASS
        buttons[i].classList.remove('characters__tabs__button--is-active');
    }
}

// Renomeamos e ajustamos a função para as novas classes
function escondeTodosPerfis() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        // Usa a classe correta do SASS
        tabsContainer[i].classList.remove('character-profile--is-active');
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}