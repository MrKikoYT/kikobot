const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.author;

  if (user.id !== 'USER ID') {
    let emb = new Discord.RichEmbed()
      .setColor([150, 0, 0])
      .setAuthor("Sem permisao!", user.avatarURL)
      .setDescription("Você não pode banir outros!")
      .setTimestamp();
    message.channel.send(emb);
  } else {

    if (args.length === 0) {
      let embed = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setAuthor("Uso!")
        .setDescription(`Faça \`${client.prefix}ban <membro_mention> <mention>\` para banir alguem!`)
        .setTimestamp();
      message.channel.send(embed);
    }

    if (args.length > 0) {
      let member = message.mentions.members.first();
      let reason;
      if (args.length > 1) {
        reason = args.slice(1).join(' ');
      } else {
        reason = "Nenhuma razão referida!";
      }
      try {
        await member.ban(reason);
        let e2 = new Discord.RichEmbed()
          .setColor([54, 57, 63])
          .setAuthor("Ban!")
          .setDescription("Novo ban em **" + message.guild.name + "**!")
          .addField("Autor do ban", `<@${user.id}>`, true)
          .addField("Punido", `${member.user.username}#${member.user.discriminator}`, true)
          .addField("Razão", `${reason}`, true)
          .setTimestamp();
        message.channel.send(e2);
      } catch(e) {
        let eee = new Discord.RichEmbed()
          .setColor([54, 57, 64])
          .setAuthor("Error!")
          .setDescription("Sent by **" + user.username + "**!\n" + `${e}`)
          .setTimestamp();
        message.channel.send(eee);
      }
    }

  }

}
