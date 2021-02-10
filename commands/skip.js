module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz para usar este comando.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.channel.send('Listo! Siguiente canción...')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: [""]
}
