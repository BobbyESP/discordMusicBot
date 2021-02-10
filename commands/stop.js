module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz para usar este comando.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.stop(message)

        message.channel.send('Listo, he salido del canal de voz y la cola se ha cancelado')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "stop",
    aliases: ["s"]
}
