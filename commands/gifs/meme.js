const fetch = require('node-fetch');
const { tenorAPI } = require('../../config.json');
const { Command } = require('discord.js-commando');

module.exports = class AnimegifCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'meme',
      group: 'gifs',
      aliases: ['meme-gif', 'memegifs'],
      memberName: 'meme',
      description:
        'say my command and ill give youa funny meme aproved by rain!',
      throttling: {
        usages: 1,
        duration: 4
      }
    });
  }

  run(message) {
    fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=meme&limit=1`)
      .then(res => res.json())
      .then(json => message.say(json.results[0].url))
      .catch(e => {
        message.say('Failed to find a gif :slight_frown:');
        // console.error(e);
        return;
      });
  }
};
