const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
module.exports.execute = async (client, message, args) => {
const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField("<:developer:840170657912061975> **Botun Sahibi**", "<@442257746289754124>,<@821411629161775175>,<@612732109093732377>,<@852918975662653460>,<@321388488140390413>")
    .addField("<:ping:840170658276048937> **Gecikme süresi**", "Bot Gecikmesi: {ping2} ms"
    .replace("{ping2}", client.ws.ping),true)
    .addField("<:ayar:840172594090213396> **Çalışma süresi**", seksizaman,true)
    .addField("<:kullanclar:840172593814568982> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),true)
    .addField("<:sunucular:840173684206600203> **Sunucular**", client.guilds.cache.size.toLocaleString(),true)
    .addField("**» Bota Oy Ver**", " [Oy Ver](https://top.gg/bot/784542093019971634/vote)",true )
    .addField("**» Bot Davet**"," [Davet Et](https://discord.com/oauth2/authorize?client_id=784542093019971634&scope=bot&permissions=8" + client.user.id + "&scope=bot&permissions=8)",true) 
    
      return message.channel.send(istatistikler);
};

module.exports.configuration = {
    name: "bilgi",
    aliases: ["bilgilendirme","shard"]
    };
