<div class="container my-5 mx-auto p-4 bg-[#111] text-white rounded-xl max-w-3xl">
  <h1 class="text-3xl font-bold mb-4">Documentação do Projeto: Chatbot FÚRIA Esports</h1>

  <h2 class="text-2xl font-semibold mt-6 mb-2">1. Visão Geral do Projeto</h2>
  <p>
    O Chatbot FÚRIA é uma aplicação conversacional multiplataforma (web e Telegram) desenvolvida para engajar fãs do time de CS:GO da FÚRIA E-sports. Ele responde dúvidas, fornece informações, realiza interações e aproxima o público do universo do time, utilizando IA generativa e integração com canais modernos de comunicação.
  </p>

  <h2 class="text-2xl font-semibold mt-6 mb-2">2. Objetivos</h2>
  <ul class="list-disc ml-6">
    <li>Oferecer um canal de interação automática e personalizada para fãs da FÚRIA.</li>
    <li>Prover informações atualizadas(até onde a api grátis consegue ser usada) sobre o time, jogadores, jogos e curiosidades.</li>
    <li>Facilitar acesso a conteúdos exclusivos e novidades do time.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-6 mb-2">3. Funcionalidades Principais</h2>
  <ul class="list-disc ml-6">
    <li>Chatbot responsivo via web e Telegram.</li>
    <li>Respostas geradas por IA (Google Gemini API).</li>
    <li>Moderação básica e filtragem de conteúdo.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-6 mb-2">4. Arquitetura e Componentes</h2>
  <h3 class="text-xl font-semibold mt-4 mb-1">4.1 Front-End (Web)</h3>
  <ul class="list-disc ml-6">
    <li>HTML/CSS/Tailwind: Interface responsiva, tema escuro, componentes visuais customizados.</li>
    <li>JavaScript: Manipulação de DOM, envio/recebimento de mensagens, animação de typing, integração com backend via fetch API.</li>
  </ul>
  <h3 class="text-xl font-semibold mt-4 mb-1">4.2 Back-End (Node.js/Express)</h3>
  <ul class="list-disc ml-6">
    <li>Express: Servidor HTTP, rotas REST para perguntas e respostas.</li>
    <li>Google Generative AI (Gemini): Geração de respostas personalizadas via API.</li>
    <li>Telegram Bot API: Integração com canal Telegram usando node-telegram-bot-api.</li>
    <li>Funções utilitárias: Limpeza de HTML, tratamento de erros, exibição de status “digitando”.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-6 mb-2">5. Fluxo de Conversa</h2>
  <ol class="list-decimal ml-6">
    <li>Usuário envia mensagem (web ou Telegram).</li>
    <li>Front-end mostra mensagem do usuário e loader de “digitando”.</li>
    <li>Back-end recebe a mensagem, monta prompt e consulta a IA.</li>
    <li>Resposta é processada (limpeza de HTML para Telegram).</li>
    <li>Front-end/Telegram exibe resposta ao usuário.</li>
  </ol>

  <h2 class="text-2xl font-semibold mt-6 mb-2">6. Configuração e Execução</h2>
  <ol class="list-decimal ml-6">
    <li>Instale as dependências:<br>
      <code>npm i --save</code>
    </li>
    <li>Configure as chaves de API no código (GoogleGenerativeAI, TelegramBot).</li>
    <li>Execute o servidor:<br>
      <code>node main.js</code>
    </li>
    <li>Acesse via navegador (<a href="http://localhost" class="text-blue-400 underline">http://localhost</a>) ou Telegram (<a href="https://t.me/SeuBot" class="text-blue-400 underline">https://t.me/SeuBot</a>).</li>
  </ol>

  <h2 class="text-2xl font-semibold mt-6 mb-2">7. Exemplos de Uso</h2>
  <h3 class="text-xl font-semibold mt-4 mb-1">7.1 Conversa Web</h3>
  <p><strong>Usuário:</strong> Quem é o professor da FURIA?</p>
  <p><strong>Bot:</strong> <code>&lt;p&gt;&lt;strong&gt;O professor é o Fallen!&lt;/strong&gt; 🧑‍🏫&lt;/p&gt;</code></p>
  <h3 class="text-xl font-semibold mt-4 mb-1">7.2 Conversa Telegram</h3>
  <p><strong>Usuário:</strong> Qual o próximo jogo da FURIA?</p>
  <p><strong>Bot:</strong> <code>&lt;b&gt;O próximo jogo será dia 30/04/2025 contra Team X!&lt;/b&gt; 🔥</code></p>

  <h2 class="text-2xl font-semibold mt-6 mb-2">8. Requisitos e KPIs</h2>
  <ul class="list-disc ml-6">
    <li>Tempo médio de resposta &lt; 3 segundos.</li>
    <li>95% de uptime.</li>
    <li>Cobertura de perguntas frequentes do universo FÚRIA.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-6 mb-2">9. Contato e Colaboradores</h2>
  <ul class="list-disc ml-6">
    <li>Lucas Alves Leandro</li>
    <li>lucasalvesleandro32@gmail.com</li>
  </ul>
</div>
