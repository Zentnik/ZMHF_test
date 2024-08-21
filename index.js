const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7065144142:AAHPmxcf5ffEokq3ijF0VNMA3pPQlljSExg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
bot.onText(/start (.+)/, (msg) => {
  const chatId = msg.chat.id;
bot.sendMessage(chatId, "hi");

});