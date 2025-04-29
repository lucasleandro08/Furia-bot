const express = require("express");
const app = express();
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const ai = new GoogleGenerativeAI("AIzaSyBWAholAxXLJeulpuh81mAJ-_9PkPsFElM");

app.use(express.json());
app.use(express.static(__dirname));

// Endpoint para receber a pergunta do usuário e retornar resposta da IA
app.post("/pergunta", async (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Pergunta não enviada" });
    try {
        const model = ai.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
        // Prompt orienta a IA a responder de forma direta, sem saudações
        const fullPrompt = `
        Você é um agente virtual especializado na organização FURIA e-sports. Responda à mensagem do usuário de forma descontraída, informativa e direta, sempre demonstrando conhecimento sobre o time e o universo de e-sports.
        
        - Se perguntarem "quem é o professor", responda que é o Fallen.
        - Utilize apenas HTML simples para a formatação da resposta (apenas as tags <p>, <strong>, <em>, <ul>, <li>, <br>).
        - NÃO inicie suas respostas com saudações, cumprimentos ou frases como "Olá", "Oi", "Seja bem-vindo", "Como posso ajudar", etc. Vá direto ao ponto.
        - Evite qualquer formatação Markdown e NÃO utilize blocos de código.
        - Inclua alguns emojis para tornar a resposta mais amigável, mas sem exagerar.
        - Sempre que possível, forneça dados ou informações atualizadas, mencionando a data real (não use "hoje").
        - Seja breve, claro e objetivo. Se a resposta for uma lista, utilize <ul> e <li>.
        - Não repita informações desnecessárias.
        - Mantenha o tom de voz alinhado ao público jovem e fã de e-sports.
        
        Mensagem do usuário: "${question}"
        `;
        const result = await model.generateContent(fullPrompt);
        const text = result.response.text();
        res.json({ response: text });
    } catch (error) {
        // Retorna erro 500 caso a IA falhe
        console.error("Erro ao gerar resposta:", error.message || error);
        res.status(500).json({ error: "Erro ao gerar conteúdo com a IA" });
    }
});

// Serve a página principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Index.html"));
});

const TelegramBot = require('node-telegram-bot-api');
const TELEGRAM_TOKEN = '7589815333:AAFV9aeuM6KxZFnifRhLws2iHFBTRX0R5hM';
const telegramBot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Remove tags HTML não suportadas pelo Telegram
function cleanTelegramHTML(text) {
  text = text.replace(/<\/?(p|ul|li|h[1-6]|br|div|span|img|table|tr|td|th|ol|hr)[^>]*>/gi, '');
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/?p[^>]*>/gi, '\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

// Processa mensagens recebidas no Telegram
telegramBot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const question = msg.text;
  try {
    // Mostra "digitando..." enquanto processa a resposta
    await telegramBot.sendChatAction(chatId, 'typing');
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
    // Prompt igual ao da web, adaptado para Telegram
    const fullPrompt = `
Você é um agente virtual especializado na organização FURIA e-sports. Responda à mensagem do usuário de forma descontraída, direta e informativa, sempre demonstrando conhecimento sobre o time e o universo de e-sports.

- Se perguntarem "quem é o professor", responda que é o Fallen.
- Utilize apenas HTML suportado pelo Telegram para formatar a resposta (<b>, <i>, <u>, <s>, <a>, <code>, <pre>).
- NÃO inicie suas respostas com saudações, cumprimentos ou frases como "Olá", "Oi", "Seja bem-vindo", "Como posso ajudar", etc. Vá direto ao ponto.
- Evite qualquer formatação Markdown e NÃO utilize blocos de código.
- Inclua alguns emojis para tornar a resposta mais amigável, mas sem exagerar.
- Sempre que possível, forneça informações atualizadas, mencionando a data real (não use "hoje").
- Seja breve, claro e objetivo. Se a resposta for uma lista, utilize <b> e <i> para destacar itens.
- Não repita informações desnecessárias.
- Mantenha o tom de voz alinhado ao público jovem e fã de e-sports.

Mensagem do usuário: "${question}"
`;

    const result = await model.generateContent(fullPrompt);
    let text = result.response.text();
    text = cleanTelegramHTML(text);
    telegramBot.sendMessage(chatId, text, { parse_mode: 'HTML' });
  } catch (error) {
    telegramBot.sendMessage(chatId, 'Desculpe, ocorreu um erro ao gerar a resposta 😓');
    console.error("Erro ao responder no Telegram:", error.message || error);
  }
});

// Inicia o servidor na porta 80
app.listen(80, () => {
    console.log("[FURIA] Servidor rodando na porta 80");
});
