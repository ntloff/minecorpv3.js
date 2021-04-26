function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function getRandom(length) {

  return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
  
  }
//
var ownerid = "дискорд айди создателя бота"
const fs = require('fs')
const mineflayer = require('mineflayer');
const Discord = require('discord.js');
const client = new Discord.Client();
const navigatePlugin = require('mineflayer-navigate')(mineflayer);
client.on('ready', () => {  console.log(`Logged in as ${client.user.tag}!`); });
//
const bot = mineflayer.createBot({
  host: "classic.minecorp.ru",
  port: "25565",
  username: "ваш никнейм, кстати зморл когда свадьба?",
  version: "1.8"
})
bot.once('login', () => {
  console.log("Ingame bot online!")
  bot.setControlState('forward', true)
  bot.chat("/l пароль от сейфа")
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

  navigatePlugin(mineflayer);
bot.on('physicTick', lookAtNearestPlayer)

bot.on('message', message => {
  var msget = message.toString()
  if(message == "Вы уже авторизированы!") return;
    else if (msget.startsWith("Создай клан")) return;
    else if (msget.includes("╭──────╢")) return;
    else if (msget.includes("Заходи на наш форум!")) return;
    else if (msget.includes("/reg")) return;
    else if (msget.includes("/donate")) return;
    else if (msget.includes("│")) return;
    else if (msget.includes(">>>")) return;
    else if (msget.includes("убил ntloffcls")) return;
    else if (msget.includes("Все ко мне! [tp]")) return;
    else if (msget.includes("- [")) return;
    else if (msget.includes("просит телепортироваться к Вам.")) return;
    else if (msget.includes("╰")) return;
    else if (msget.includes("PvP-зону")) return;
    else if (msget.includes("Чтобы сделать кликабельной")) return;
    else if (msget.includes("Обновления, конкурсы, мемы! Жми на vk.com/minecorp_server")) return;
    else if (msget.includes("Вы являетесь владельцем")) return;
    else if (message == "Ты в бою! Не выходи из игры, дерись!") return;
    else if (message == "Ты больше не в бою") return;
    else if (message == "Для отказа от запроса введите /tpdeny.") return;
    else if (message == "Заявка будет автоматически отменена через 120 секунд.") return;
    else if (message == "Для принятия запроса введите /tpaccept.") return;
    else if (message == "Вы успешно вошли!") return;
    else if (message == "Добавьте свой email: /email add ВАШ_EMAIL ВАШ_EMAIL") return;
    else if (message == "You don't have permission to chat in this region!") return;
    else if (message == "Сессия открыта") return;
    else if (message == "Создай клан за $20 000 /clan") return;
    else if (message == "Всё про сервер и не только! Жми на forum.minecorp.ru") return;
    else if (message == "Паркуры на время с призами и чекпоинтами  /prk") return;
    else if (message == "Заходи к нам в дискорд! http://minecorp.ru/dis") return;
    else if (message == "Успешная регистрация!") return;
    else if (message == "Хочешь готовый мини-домик?  /kithome") return;
    else if (message == "Ты получил 35$ за 5 минут игры на сервере") return;
    else if (message == "Рынок игровых предметов!  /market") return;
    else if (message == "Пользователь не найден в Базе Данных") return;
    else if (message == "Донат можно купить на сайте MineCorp.ru (клик)") return; // словарь заблокированных слов
    else{
  let time = new Date();
  let displaytime = time.toLocaleTimeString();
  console.log(message.toAnsi())
  let channel = client.channels.cache.find(channel => channel.name === 'канал с сообщениями')
  if(!channel) return
  channel.send(`${message}`)
  let channel1 = client.channels.cache.find(channel => channel.name === 'канал с сообщениями, в которых будет указыватся точное время и дата')
  if(!channel1) return
  let today = new Date().toISOString().slice(0, 10)
  channel1.send(`[${today}] [${displaytime}] ${message}`)
  fs.appendFile('d:\\mc\\a\\logs.txt', `[Classic] [${today}] [${displaytime}] `+message.toString()+"\n", err => {
    if (err) {
      console.error(err)
      return
    }
  })
}})
prefix = ""
client.on("message", msg => {
  let args = msg.content.split(" ").slice(1)
  args = msg.content.slice(prefix.length).split(/ +/);
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  command = args.shift().toLowerCase();
  let aauthorid = "айди создателя"
  if(command == "treg"){ // трег пакет, если вы создаете нового бота - замените ник, запустите его, введите в дискорд сервер 'treg' и бот сам зарегестрируется.
    if(msg.author.id == ownerid){
    bot.chat("/reg пароль пароль")
    msg.delete()
  }}
  if (command.startsWith("!")){
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorpcls`)
      if (!channel1) return;
        const chat = args.join(" ")
        msg.delete()
        bot.chat(`![Ⓓ] ${msg.author.tag} -> ${chat}`)}})

client.login("токен бота дискорд")
