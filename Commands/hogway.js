const Discord = require('discord.js');

module.exports.execute = async (client, message, args) => {

let username = 'Sen Ortalama';
if(message.mentions.members.first()) username = message.mentions.members.first().user.username+' is';
if(message.mentions.users.first()) username = message.mentions.users.first().username+' is';

let random = Math.floor(Math.random(100) * 100);
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('dalgamigeçiyorsuncanim').setDescription(`${username} ${random}% gaysın 🏳️‍🌈`));

};
module.exports.configuration = {
    name: "howgay",
    aliases: ["gay"]
};