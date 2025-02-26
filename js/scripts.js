document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FUNCIONALIDADE PRINCIPAL: MENU OFFCANVAS (RECOLHER E ROLAR SUAVE) ---
    // Mantido como está - funcionalidade ok

    const menuLinks = document.querySelectorAll('#offcanvasMenu .offcanvas-body nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offcanvasElement = document.getElementById('offcanvasMenu');
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

            if (targetSection) {
                offcanvasInstance.hide();
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            } else {
                offcanvasInstance.hide();
                console.warn(`Seção com ID '${targetId}' não encontrada.`);
            }
        });
    });

    // --- 2. BOTÃO "VOLTAR AO TOPO" (FUNCIONALIDADE EXISTENTE - MANTIDA) ---
    // Mantido como está - funcionalidade ok

    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 300);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 3. ANIMAÇÃO "FADE-IN" AO ROLAR (FUNCIONALIDADE EXISTENTE - MANTIDA) ---
    // Mantido como está - funcionalidade ok

    const sections = document.querySelectorAll('section, .formulario-fixo');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- 4.  NOVA FUNCIONALIDADE:  DESTAQUE DO LINK DO MENU ATIVO (SECTION HIGHLIGHTING) ---
    // Mantido como está - funcionalidade ok

    const sectionsForHighlight = document.querySelectorAll('section');
    const navLinksForHighlight = document.querySelectorAll('#offcanvasMenu .offcanvas-body nav a[href^="#"]');
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinksForHighlight.forEach(navLink => navLink.classList.remove('active'));
                const activeNavLink = document.querySelector(`#offcanvasMenu .offcanvas-body nav a[href="#${entry.target.getAttribute('id')}"]`);
                if (activeNavLink) {
                    activeNavLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.5 });

    sectionsForHighlight.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- 5.  FUNCIONALIDADE DE ENVIO DO FORMULÁRIO PARA O GOOGLE SHEETS (REFEITO E OTIMIZADO) ---
    // REFEITO E OTIMIZADO para maior clareza e robustez

    const inscricaoForm = document.getElementById("inscricaoForm");
    const formMessage = document.getElementById("formMessage");

    inscricaoForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impedir envio padrão do form

        const formData = new FormData(inscricaoForm); // Captura dados do form

        // **URL "FORMRESPONSE" CORRETA DO SEU GOOGLE FORMS!  SUBSTITUA A URL PLACEHOLDER ABAIXO PELA SUA URL REAL!**
        const formResponseUrl = "https://docs.google.com/forms/d/e/1FAIpQLScZOTmLcUiFi4b3_VMokimergZNZrJCkbUXgHZPxAKRahtGew/viewform"; // URL PLACEHOLDER - **VOCÊ PRECISA SUBSTITUIR!**

        fetch(formResponseUrl, { // Enviar dados via POST para o Google Forms
            method: "POST",
            mode: "no-cors", // Envio cross-origin sem redirecionamento (importante!)
            body: formData, // Dados do formulário formatados
        })
        .then(function(response) { // Promessa de resposta do fetch (arrow function para simplificar)
            if (response.status === 200) { // **VERIFICA SE A RESPOSTA DO SERVIDOR FOI "200 OK" (SUCESSO)**
                formMessage.style.display = "block"; // Mostra mensagem de sucesso
                inscricaoForm.reset(); // Limpa o formulário
                console.log("Formulário enviado com sucesso para o Google Sheets!"); // Mensagem de log no Console (opcional)
            } else { // Se a resposta do servidor NÃO for 200 OK, algo deu errado no ENVIO
                console.error("Erro no envio do formulário para o Google Sheets. Status:", response.status); // Log de erro no Console (CRUCIAL para debug!)
                alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde."); // Alerta amigável para o usuário
            }
        })
        .catch(function(error) { // Captura erros de REDE ou outros erros no FETCH
            console.error("Erro de rede ao enviar o formulário:", error); // Log de erro de rede (CRUCIAL para debug!)
            alert("Ocorreu um erro de rede ao enviar o formulário. Por favor, verifique sua conexão e tente novamente mais tarde."); // Alerta amigável para o usuário
        });
    });

    // --- 7. EFEITO DE FEEDBACK VISUAL NO BOTÃO DE FORMULÁRIO (FUNCIONALIDADE EXISTENTE - MANTIDA) ---
    // Mantido como está - funcionalidade ok

    const formButton = document.querySelector('.formulario-fixo .btn-primary');

    formButton.addEventListener('click', () => {
        formButton.classList.add('btn-clicked-effect');
        setTimeout(() => {
            formButton.classList.remove('btn-clicked-effect');
        }, 300);
    });
});
