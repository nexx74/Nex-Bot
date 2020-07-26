const { Command } = require('discord.js-commando');

module.exports = class whomademe extends Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['bot-maker', 'bot-creator'],
      memberName: 'whomademe',
      group: 'other',
      description: "Replies with the bot creator's name"
    });
  }

  run(message) {
    message.say(
      'Made by hyperzone and Rain with :heart: '
    )
    message.say(
      '``Do ; help to get a dm from me thanks!! on another note all mod commands besides prune will have the prefi m; for easier acess to mods`` :thumbsup:'
    )

  }
};
