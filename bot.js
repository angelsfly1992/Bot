const Discord = require('discord.js');
const client - new Discord.Client();

client.on('ready', () => {
  consile.log('I am ready!');
  });
  
  client.on('message',message => {
    if ('message.contecnt === 'ping') {
      message.replay('pong');
      }
  });
  
  client.login(process.env.BOT_TOKEN);
  
