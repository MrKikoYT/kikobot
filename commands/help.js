const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor("Lista de Comandos", client.user.avatarURL)
    .setDescription("Meu prefix neste servidor: \`" + client.prefix + "\`")
    .addField("COMANDO", "DESCRIÇÃO DO COMANDO", true) 
    .addField("<:botpng:474617537183744000>", "<VOSSO ICON> Bot Criado Por NOME#ID")
    .setTimestamp();
  
  message.channel.send(embed);
  
}
