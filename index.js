const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Reproduciendo \`${song.name}\` - \`${song.formattedDuration}\`\nCanción pedida por: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `La canción ${song.name} - \`${song.formattedDuration}\` ha sido añadida a la cola por: ${song.user}`
    ))

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);