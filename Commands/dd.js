const { MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
    let izinli = ["kullanabilcecek id"] 
 if (!izinli.includes(message.member.id)) return message.channel.send('Sadece Bot Sahibi Kullanabilir')

//hangi sunucularda olduğunu sıralar
    

const cenks = new MessageEmbed()
.setDescription(client.guilds.cache.map(r => r.name).join("\n"))
.setColor("BLACK")
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send(cenks)

}
module.exports.configuration = {
name: "sunucu",
aliases: ["sw"]
};