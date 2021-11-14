const Discord = require('discord.js');


module.exports.execute = async (client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription('Lütfen Bir Öneri Belirtiniz! <:yanl:841707171409952778>'));
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription('Öneriniz Bildirildi! <:tiks:841707046910689291>')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter('Please Meme', client.user.avatarURL())
.setDescription(`<:kullanclar:840172593814568982> **${message.author.tag}** Adlı Kullanıcıdan Bir Öneri Aldım`)
.addField(`Kullanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\n <@&809496812435931136> `)
.addField("Öneri Açıklaması", type)
.setTimestamp()
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('841707947641667604').send(embed2); 

};
module.exports.configuration = {
    name: "öneri",
    aliases: ["öneri","öne","Öneri","Öner"]
    };
