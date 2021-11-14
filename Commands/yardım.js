const Discord = require('discord.js');

module.exports.execute = async (client, message, args) => {

const efembed = new Discord.MessageEmbed()
.setColor("#fe0808")
.setDescription(`» \`!memes\`
Random Memes Atar.

» \`!howgay\`
yüzde kaç gay olduğunu hesaplar.

» \`!mahkum\`
Profil fotoğrafınıza mahkum efekti verir.

»  \`!bilgi\`
Bot Hakkında Bilgi Verir.

» \`!öneri\`
Botta olmasını istediğinz şeyi belirtirsiniz.

<:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262><:memes:820131577714442262>

`)

.setImage("https://cdn.discordapp.com/attachments/797998297661964288/820130803505561630/pleasememe4-removebg-preview.png")



.addField("**» Bota Oy Ver**", " [Oy Ver](https://top.gg/bot/784542093019971634/vote)",true).addField("**» Botu Davet Et**"," [Davet Et](https://discord.com/oauth2/authorize?client_id=784542093019971634&scope=bot&permissions=8" + client.user.id + "&scope=bot&permissions=8)",true).addField("**» Destek Sunucusuna Katıl**", " [Katıl](https://discord.gg/MPRPuN33X6)",true)

.setTimestamp()
.setThumbnail("https://media.discordapp.net/attachments/824740835768795138/839856415585992724/spin.gif")
.setFooter("Please Meme")
message.channel.send(efembed)
};
module.exports.configuration = {
    name: "yardım",
    aliases: ["help"]
    };