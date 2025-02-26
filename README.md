# Website Dra. Perio - Amanda Gonzalez

[![Website Dra. Perio - Amanda Gonzalez](images/logo.png)](https://www.draperiodonto.com.br)

[Image of Captura de tela do website Dra. Perio - Amanda Gonzalez]

## Sobre o Projeto

Este projeto é um website responsivo e informativo para a Dra. Amanda Gonzalez, especialista em Periodontia. O site foi desenvolvido para promover os serviços da Dra. Amanda, destacar sua expertise e capturar leads de potenciais pacientes interessados em uma mini aula gratuita sobre técnicas avançadas de Periodontia.

O site inclui as seguintes seções principais:

*   **Header:** Título do site e menu offcanvas responsivo.
*   **Menu Offcanvas:** Menu de navegação lateral que recolhe ao clicar nos links e rola suavemente para as seções correspondentes.
*   **Botão "Voltar ao Topo":**  Botão fixo que aparece ao rolar a página e permite retornar suavemente ao topo do site.
*   **Animação "Fade-in":** Seções e elementos do formulário aparecem com animação suave ao entrarem na área de visualização.
*   **Destaque do Link do Menu Ativo:** O link do menu offcanvas correspondente à seção atualmente visível na tela é destacado, facilitando a navegação.
*   **Seção "Sobre o Curso":** Informações sobre o mini curso gratuito de Periodontia.
*   **Seção "Sobre a Professora":** Apresentação da Dra. Amanda Gonzalez e sua experiência.
*   **Seção "Redes Sociais":** Links para as redes sociais da Dra. Amanda (Instagram e Email).
*   **Seção "Inscreva-se" (Formulário):**  Formulário de inscrição para a mini aula gratuita, com envio dos dados para uma planilha do Google Sheets.
*   **Footer:** Informações de direitos autorais.

## Funcionalidades Principais

*   **Design Responsivo:** O site se adapta a diferentes tamanhos de tela (desktops, tablets e smartphones).
*   **Menu de Navegação Offcanvas:** Navegação intuitiva e otimizada para dispositivos móveis.
*   **Rolagem Suave:**  Transições suaves ao navegar entre as seções do site e ao voltar ao topo.
*   **Animações de Fade-in:**  Efeito visual elegante ao exibir o conteúdo das seções.
*   **Destaque do Menu Ativo:** Melhora a experiência do usuário ao indicar a seção visualizada.
*   **Formulário de Inscrição Integrado com Google Sheets:**
    *   Captura de nome, email e Instagram (opcional) dos interessados.
    *   Envio dos dados diretamente para uma planilha do Google Sheets para fácil gerenciamento de leads.
    *   Mensagem de sucesso exibida no site após o envio bem-sucedido do formulário.
    *   Mensagem de erro exibida no site em caso de problemas de rede durante o envio do formulário.
*   **Botão "Voltar ao Topo":** Facilita a navegação em páginas longas.
*   **Redes Sociais:** Links diretos para as redes sociais da Dra. Amanda.

## Tecnologias Utilizadas

*   **HTML:** Estrutura do conteúdo e marcação da página web.
*   **CSS:** Estilização visual do site (layout, cores, tipografia, animações, responsividade).
*   **JavaScript:** Interatividade e funcionalidades dinâmicas do site, incluindo:
    *   Menu offcanvas (Bootstrap).
    *   Rolagem suave.
    *   Animação fade-in.
    *   Destaque do menu ativo.
    *   Envio do formulário para o Google Sheets (com `fetch API` e `FormData`).
*   **Bootstrap 5:** Framework CSS para layout responsivo e componentes da interface (menu offcanvas, formulário, botões, etc.).
*   **Font Awesome:**  Biblioteca de ícones para os ícones do menu, formulário e redes sociais.
*   **Google Forms & Google Sheets:**  Para coleta e armazenamento dos dados do formulário de inscrição.

## Configuração e Implantação

Para utilizar e personalizar este website, siga os seguintes passos:

1.  **Download ou Clone o Repositório:**

    *   Faça o download do código fonte do projeto como um arquivo ZIP ou clone o repositório para sua máquina local utilizando o Git:
        ```bash
        git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
        ```

2.  **Abra o Arquivo `index.html`:**

    *   Abra o arquivo `index.html` em seu navegador para visualizar a estrutura básica do site.

3.  **Obtenha a URL "FormResponse" do seu Google Forms:**

    *   Para que o formulário de inscrição funcione corretamente e envie os dados para a sua planilha do Google Sheets, você precisa configurar a URL "FormResponse" do seu formulário do Google Forms no código JavaScript.
    *   **Passos para obter a URL "FormResponse" correta:**
        1.  **Crie um formulário no Google Forms** com os campos desejados (Nome, E-mail, Instagram, etc.).
        2.  **Crie uma planilha no Google Sheets** para coletar as respostas do formulário.
        3.  **Vincule o formulário à planilha** (o Google Forms faz isso automaticamente ao criar um formulário).
        4.  No Google Forms, abra o formulário em modo de **EDIÇÃO**.
        5.  Clique no botão **"Enviar"** (no canto superior direito).
        6.  Na janela "Enviar formulário", clique na aba **"Link"** (ícone de corrente).
        7.  **Copie a URL** que aparece ali.  **Esta é a sua URL "FormResponse" correta!**  Ela deve ser longa e terminar em `/formResponse`.
        [Image of Captura de tela mostrando como pegar a URL "FormResponse" correta no Google Forms, destacando o botão "Enviar", a aba "Link" e a URL que termina em /formResponse, em português: Captura de tela mostrando como pegar a URL "FormResponse" correta no Google Forms]

4.  **Substitua a URL PlaceHolder no arquivo `js/scripts.js`:**

    *   Abra o arquivo `js/scripts.js` na pasta `js` do projeto.
    *   Localize a linha de código que define a variável `formResponseUrl`:
        ```javascript
        const formResponseUrl = "SUA_URL_FORMRESPONSE_GOOGLE_FORMS_AQUI"; // URL PLACEHOLDER - **VOCÊ PRECISA SUBSTITUIR!**
        ```
    *   **Substitua o texto `"SUA_URL_FORMRESPONSE_GOOGLE_FORMS_AQUI"`  (mantendo as aspas duplas) pela  URL "FormResponse" que você copiou do Google Forms no passo anterior.**
    *   **Certifique-se de que a URL esteja correta e completa, e que termine em  `/formResponse`.**
    *   Exemplo de como a linha deve ficar (com a sua URL real):
        ```javascript
        const formResponseUrl = "[https://docs.google.com/forms/d/e/1FAIpQLScZOTmLcUiFi4b3_VMokimergZNZrJCkbUXgHZPxAKRahtGew/formResponse](https://docs.google.com/forms/d/e/1FAIpQLScZOTmLcUiFi4b3_VMokimergZNZrJCkbUXgHZPxAKRahtGew/formResponse)";
        ```
    *   **Salve o arquivo `js/scripts.js` modificado.**

5.  **Implantação (Opcional):**

    *   Para publicar o website online, você pode utilizar um serviço de hospedagem como o [Hostinger](https://www.hostinger.com.br/) (mencionado anteriormente) ou qualquer outro serviço de sua preferência.
    *   Faça o upload de todos os arquivos do projeto (HTML, CSS, JavaScript, imagens, etc.) para o servidor de hospedagem.
    *   Certifique-se de que a estrutura de pastas seja mantida (a pasta `js` com o `scripts.js`, a pasta `css` com o `styles.css`, a pasta `images` com as imagens, etc.).

## Como Usar

1.  **Acesse o Website:** Abra o website no seu navegador através do domínio configurado ou, localmente, abrindo o arquivo `index.html`.
2.  **Navegue pelas Seções:** Utilize o menu offcanvas ou a rolagem da página para explorar as seções "Sobre o Curso", "Sobre a Professora" e "Redes Sociais".
3.  **Inscreva-se no Formulário:**
    *   Na seção "Inscreva-se", preencha o formulário com seu nome completo, email e Instagram (opcional).
    *   Clique no botão "Acessar Mini Aula".
    *   Após o envio bem-sucedido, a mensagem "Formulário enviado com sucesso!" será exibida no site.
    *   Em caso de erro de rede, a mensagem "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde." será exibida.
    *   Verifique a planilha do Google Sheets vinculada ao formulário para confirmar o recebimento dos dados.

## Personalização

*   **Conteúdo Textual:** Edite o conteúdo textual do site (títulos, parágrafos, mensagens) diretamente no arquivo `index.html`.
*   **Imagens:** Substitua as imagens existentes pelas suas próprias imagens na pasta `images` e atualize os caminhos das imagens no arquivo `index.html`.
*   **Estilos Visuais:** Modifique os estilos visuais do site (cores, tipografia, layout, animações) editando o arquivo `css/styles.css`.

## Contribuição

Contribuições para melhorias e correções são bem-vindas! Sinta-se à vontade para abrir issues e pull requests neste repositório.

## Licença

[Adicione aqui a licença do seu projeto, se desejar. Exemplo: MIT License]

## Contato

[Se desejar, adicione informações de contato, como email ou link para seu perfil profissional]

---

**Desenvolvido com ❤️ para Dra. Amanda Gonzalez.**
