require('dotenv').config();
const { HLTV } = require('hltv');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `🔥 Bem-vindo à FanZone da FURIA, ${msg.from.first_name}!\nUse os comandos para torcer, votar e acompanhar os jogos.`);
});

// Comando /proximojogo
bot.onText(/\/proximojogo/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `📅 Próximo jogo da FURIA: 03/05 às 18h contra NAVI! 🐆`);
});

// Comando de torcida
bot.onText(/\/vaifuria/, (msg) => {
  bot.sendMessage(msg.chat.id, `💥 VAAAAAAMO FURIAAAAAAA!!! 🐆🐆🔥`);
});

// Enquete (exemplo)
bot.onText(/\/mvp/, (msg) => {
  bot.sendPoll(msg.chat.id, "Quem foi o MVP da última partida?", ["KSCERATO", "yuurih", "arT", "chelo", "FalleN"]);
});

bot.onText(/\/ranking/, (msg) => {
  const chatId = msg.chat.id;
  const teamId = 8297; // ID da FURIA

  HLTV.getTeamRanking().then((ranking) => {
    const furiaRanking = ranking.find((team) => team.teamId === teamId);
    if (furiaRanking) {
      const rank = furiaRanking.rank;
      const points = furiaRanking.points;
      bot.sendMessage(chatId, `🏆 FURIA está atualmente na posição ${rank} com ${points} pontos!`);
    }
  }).catch((error) => {
    console.error(error);
    bot.sendMessage(chatId, '❌ Ocorreu um erro ao buscar o ranking da FURIA.');
  }
  );
});

bot.onText(/\/status/, async (msg) => {
  const chatId = msg.chat.id;
  const teamId = 8297; // ID da FURIA

  try {
    const match = await HLTV.getMatches();
    const furiaMatch = match.find(match =>
      matches.filter(
        (match) =>
          match.team1?.id === teamId || match.team2?.id === teamId
      ));

    if (furiaMatch) {
      const status = furiaMatch.live ? '🔴 Ao Vivo' : '🟡 Agendado';
      const opponent = match.team1.name.toLowerCase().includes('furia') ? match.team2.name : match.team1.name;
      const time = furiaMatch.date ? new Date(furiaMatch.date).toLocaleString('pt-BR') : 'Horário não disponível';

      bot.sendMessage(chatId, `${status} - FURIA vs ${opponent} às ${time}`);
    } else {
      bot.sendMessage(chatId, '🔍 Nenhuma partida da FURIA encontrada.');
    }
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, '❌ Ocorreu um erro ao buscar o status da FURIA.');
  }
});

