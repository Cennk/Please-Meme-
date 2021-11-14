const Discord = require("discord.js");  
    const fetch = require('node-fetch');
const Snekfetch = require("snekfetch");
    module.exports.execute = async (client, message, args,channel,children) => {

        const { body } = await Snekfetch
              .get('https://www.reddit.com/r/burdurland.json?t')
              .query({ limit: 1000 });
          const allowed = channel ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      setTimeout (function() {
          const randomnumber = Math.floor(Math.random() * allowed.length)
          
      message.channel.send(allowed[randomnumber].data.url).then(m => { m.react(`🔼`).then(m.react('⭐')).then(m.react('🔽'))})
      })

    }
    module.exports.configuration = {
    name: "meme",
    aliases: ["memes"]
    };