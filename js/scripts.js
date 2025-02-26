document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FUNCIONALIDADE PRINCIPAL: MENU OFFCANVAS (RECOLHER E ROLAR SUAVE) ---

    const menuLinks = document.querySelectorAll('#offcanvasMenu .offcanvas-body nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => { // Adicionado 'event' para prevenir comportamento padrão do link

            event.preventDefault(); // Impede o comportamento padrão do link (ir direto para a âncora)

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offcanvasElement = document.getElementById('offcanvasMenu');
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

            if (targetSection) {
                offcanvasInstance.hide(); // Recolhe o menu PRIMEIRO

                // Rola suavemente APÓS o menu recolher (timeout para dar tempo da animação do offcanvas)
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 300); // 300ms - tempo aproximado da animação de fechamento do offcanvas
            } else {
                offcanvasInstance.hide(); // Recolhe o menu mesmo se a seção não for encontrada
                console.warn(`Seção com ID '${targetId}' não encontrada na página.`); // Alerta no console para IDs inválidos
            }
        });
    });


    // --- 2. BOTÃO "VOLTAR AO TOPO" (FUNCIONALIDADE EXISTENTE - MANTIDA) ---

    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- 3. ANIMAÇÃO "FADE-IN" AO ROLAR (FUNCIONALIDADE EXISTENTE - MANTIDA) ---

    const sections = document.querySelectorAll('section, .formulario-fixo');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });


    // --- 4.  NOVA FUNCIONALIDADE:  DESTAQUE DO LINK DO MENU ATIVO (SECTION HIGHLIGHTING) ---

    const sectionsForHighlight = document.querySelectorAll('section'); // Seleciona apenas SECTIONS para highlight, não o formulario fixo
    const navLinksForHighlight = document.querySelectorAll('#offcanvasMenu .offcanvas-body nav a[href^="#"]'); // Seleciona links do menu com href começando com '#'

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove a classe 'active' de todos os links do menu
                navLinksForHighlight.forEach(navLink => {
                    navLink.classList.remove('active');
                });

                // Adiciona a classe 'active' APENAS ao link correspondente à seção que está visível
                const activeNavLink = document.querySelector(`#offcanvasMenu .offcanvas-body nav a[href="#${entry.target.getAttribute('id')}"]`); // Seleciona o link com href igual ao ID da seção
                if (activeNavLink) {
                    activeNavLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5 // Define quando a seção é considerada "ativa" (50% visível)
    });

    sectionsForHighlight.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- 5.  FUNCIONALIDADE DE ENVIO DO FORMULÁRIO PARA O GOOGLE SHEETS (NOVA FUNCIONALIDADE JAVASCRIPT) ---

    document.getElementById("inscricaoForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        const formData = new FormData(this);

        // **URL "FORMRESPONSE" CORRETA DO SEU GOOGLE FORMS!  VERIFIQUE E SUBSTITUA SE NECESSÁRIO!**
        //  Exemplo de URL (VOCÊ PRECISA USAR A SUA URL REAL!):
        //  https://docs.google.com/forms/d/e/1FAIpQLSeunFJEiO7aJrKkuo2j_eiigHhKz83iKSBSCJLK-mE43ILLw/formResponse
        fetch("SUA_URL_FORMRESPONSE_GOOGLE_FORMS_AQUI", { // **<---  ATENÇÃO AQUI! VERIFIQUE SE ESTÁ CERTO!**
            method: "POST",
            mode: "no-cors", // Permite envio cross-origin sem redirecionamento
            body: formData,
        })
        .then(function() {
            // Formulário enviado com sucesso (mensagem e reset)
            document.getElementById("formMessage").style.display = "block"; // Mostra mensagem de sucesso
            document.getElementById("inscricaoForm").reset(); // Limpa o formulário
        })
        .catch(function(error) {
            // Erro no envio (opcional: tratar erro aqui)
            console.error("Erro ao enviar o formulário:", error);
            alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde."); // Mensagem de erro simples
        });
    });

    // --- 7. EFEITO DE FEEDBACK VISUAL NO BOTÃO DE FORMULÁRIO (NOVO EFEITO JS - SEM MEXER NO INDEX) ---
    const formButton = document.querySelector('.formulario-fixo .btn-primary'); // SELECIONA O BOTÃO DO FORMULARIO

    formButton.addEventListener('click', () => {
        formButton.classList.add('btn-clicked-effect'); // ADICIONA CLASSE DE EFEITO AO CLICAR
        setTimeout(() => {
            formButton.classList.remove('btn-clicked-effect'); // REMOVE A CLASSE APÓS UM PEQUENO DELAY
        }, 300); // 300ms - Tempo do efeito (ajuste conforme preferir)
    });
});