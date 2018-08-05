const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  let embed = new Discord.RichEmbed() 
    .setColor([241, 72, 53])
    .setAuthor("Informação do Bot", client.user.avatarURL)
    .setDescription("Convite [aqui](LINK CONVITE DO BOT)")
    .addField("Guilds", ":desktop: " + client.guilds.size, true)
    .addField("Users", ":joystick: " + client.users.size, true)
    .addField("Channels", ":page_facing_up: " + client.channels.size, true)
    .addField("Bot Version", "v1.0.0", true)
    .addField("Country", ":flag_pt: Portugal", true)
    .addField("Library", ":books: discord.js", true)
    .setFooter("MENSAGEM À ESCOLHA", client.user.avatarURL)
    .setTimestamp();
  
  message.channel.send(embed);
  
}
