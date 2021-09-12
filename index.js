require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { hostname } = require('os');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS ] });

client.on('ready', () => {
    console.log('ready!');
})

client.on('messageCreate', message => {
    if ( message.content !== 'あすぱわ～' ) return;
    message.channel.send({content: `とぅもろ～ Response from: ${hostname()}`});
});

client.login(process.env.DISCORD_BOT_TOKEN);