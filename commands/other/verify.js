const { Command } = require('discord.js-commando');

module.exports = class whomdeme extends Command {
  constructor(client) {
    super(client, {
      name: 'verify',
      aliases: ['agree', 'join'],
      memberName: 'whomdeme',
      group: 'other',
      description: "verify command"
    });
  }

  run(message) {
      
    if (message.author.bot){
        return;
      }
    

      message.channel.send(message.author.toString() + "** Do you want to join our server? Say yes or no** ")
          .then(() => {
              message.channel.awaitMessages(response => response.content == 'yes' || response.content == 'no', {
                      max: 1,
                      time: 60000,
                      errors: ['time'],
                  })
    
                  .then((collected) => {
                      if (collected.first().content == 'yes') {
                          message.channel.send(`*welcome to the server wait a few seconds to get full acess*`);
                          let mainRole = message.guild.roles.cache.find(role => role.name === "Stars");
                          message.member.roles.add(mainRole.id);
                          console.log("done");
                      } else if (collected.first().content == 'no') {
                          message.channel.send(`*loser fine leave and find another server bitch*`);
                      }
                  })
                  .catch(() => {
                      message.channel.send(`redo this and say yes or no`);
                  });
          });
    }
    
};
