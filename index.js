require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS ] });

client.on('ready', () => {
    console.log('ready!');
})

client.on('messageCreate', message => {
    if ( message.content !== 'あすぱわ～' ) return;
    message.channel.send({content: 'とぅもろ～'});
});

client.login(process.env.DISCORD_BOT_TOKEN);