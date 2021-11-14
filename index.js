const { Discord, MessageEmbed, Client } = require('discord.js');
const client = new Client({fetchAllMembers: true});
const fs = require("fs");
const ayar = require("./settings.json");



client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "!yardım" }, status: "online" });
});


client.on("message", message => {
      if(message.content === "cu") {
      message.reply("anainamcuuuu")

  }
});  

const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
global.client = client;
fs.readdir("./Commands", (err, files) => {
    if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log(`${files.length} komut yüklenecek.`);
    files.forEach(file => {
        let prop = require(`./Commands/${file}`);
        if(!prop.configuration) return;
        console.log(`${prop.configuration.name} komutu yükleniyor!`);
        if(typeof prop.onLoad === "function") prop.onLoad(client);
        commands.set(prop.configuration.name, prop);
        if(prop.configuration.aliases) prop.configuration.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
});

fs.readdir("./Events", (err, files) => {
    if(err) return console.error(err);
    files.filter(file => file.endsWith(".js")).forEach(file => {
        let prop = require(`./Events/${file}`);
        if(!prop.configuration) return;
        client.on(prop.configuration.name, prop);
    });
});

  client.on("message", (message) => {
        if (message.author.bot ||!message.content.startsWith(ayar.prefix) || !message.channel || message.channel.type == "dm") return;
        let args = message.content
          .substring(ayar.prefix.length)
          .split(" ");
        let command = args[0];
        let bot = message.client;
        args = args.splice(1);
        let calistirici;
        if (commands.has(command)) {
          calistirici = commands.get(command);
          calistirici.execute(bot, message, args);
        } else if (aliases.has(command)) {
          calistirici = aliases.get(command);
          calistirici.execute(bot, message, args);
        }
  });
  
client.login(ayar.token).then(console.log("Bot başarılı bir şekilde giriş yaptı.")).catch(e => console.error(e));
