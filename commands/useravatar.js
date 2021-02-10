module.exports.run = async (bot, message, args, Discord) => {

    const embed = new Discord.MessageEmbed()
        .setTitle("Avatar de " + message.author.username)
        .setImage(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))

    message.channel.send(embed);
}

module.exports.config = {
    name: "useravatar",
    aliases: ["avatar"]
}
