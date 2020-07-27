const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token, discord_owner_id } = require('./config.json');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: discord_owner_id // value comes from config.json
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group'],
    ['gifs', 'Gif Command Group'],
    ['other', 'random types of commands group'],
    ['guild', 'guild related commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`${prefix}help`, {
    type: 'WATCHING',
  });
});
client.on('message', message => {
  const Discord = require('discord.js')
  var client = new Discord.Client()

  if (message.content.startsWith('+ dm')) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if (dMessage.length < 1) return message.reply('You must supply a message!')

    dUser.send(`${dUser} hey there: ${dMessage}`)


    message.author.send(`${message.author} You have sent your message to ${dUser}`)
}
if (message.content.includes('<@462019251897761792>')) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let dMessage = args.join(" ").slice(22);
    message.author.send(`${message.author} hey there: Please dm @justen do not Ping/Dm Rituazl unless their is a valid reason. If you keep doing this you will be warned`)
}

  if (message.content.startsWith('m;warn')) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.member.guild.me.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premission to do that!");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
    if (reason.length < 1) return message.reply('You must have a reason for the warning.');

    let dmsEmbed = new Discord.MessageEmbed()
        .setTitle("Warn")
        .setColor("#00ff00")
        .setDescription(`You have been warned on \`${message.guild.name}\``)
        .addField("Warned by", message.author.tag)
        .addField("Reason", reason);

    user.send(dmsEmbed);

    message.delete();

    message.channel.send(`${user.tag} has been warned`)

}

if (message.content.startsWith('m;mute')) {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let author1 = message.author.username;
  let user = message.mentions.users.first();
  if (!user) return message.reply("you did not specify who you would like to mute");

  //checks if the users is trying to fight themselves
  if (user.id == message.author.id) return message.reply('you cannot mute yourself!');

  //checks if the user is trying to fight the bot
  if (user.bot == true)
      return message.reply('you cannot mute a bot!')
  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premssions to do that!");

  //saves the two user ids to variables
  var fighter1 = message.author.id;
  var fighter2 = user.id;

  //announces challenge and awaits response
  var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if (!person) return message.reply("I CANT FIND THE USER " + person)

  let role = message.guild.roles.cache.find(role => role.name === "Muted");


  if (!role) return message.reply("Couldn't find the mute role.")


  person.roles.add(role.id);


  message.channel.send(`${person} has now been muted`)

  const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
  let xdemby = new Discord.MessageEmbed()
      .setColor("WHITE")
      .setTitle("Mute LOG")
      .addField(" **Mute:** ", ` ${person} has been *muted* `)
      .addField("**Muted BY:**", `${message.author}`, true)
      .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
      .setTimestamp()
  channel.send(xdemby);
  }
  if (message.content.startsWith('m;unmute')) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let author1 = message.author.username;
    let user = message.mentions.users.first();
    if (!user) return message.reply("you did not specify who you would like toun mute");

    //checks if the users is trying to fight themselves
    if (user.id == message.author.id) return message.reply('you cannot unmute yourself!');

    //checks if the user is trying to fight the bot
    if (user.bot == true)
        return message.reply('you cannot unmute a bot!')
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premssions to do that!");

    //saves the two user ids to variables
    var fighter1 = message.author.id;
    var fighter2 = user.id;

    //announces challenge and awaits response
    var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if (!person) return message.reply("I CANT FIND THE USER " + person)

    let role = message.guild.roles.cache.find(role => role.name === "Stars");
    let mainrole = message.guild.roles.cache.find(role => role.name === "Muted");

    if (!role) return message.reply("Couldn't find the unmute role.")


    person.roles.add(role.id);
    person.roles.remove(mainrole);


    message.channel.send(`${person} has now been unmuted`)

    const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
    let xdemby = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Unute LOG")
        .addField(" **UNmute:** ", ` ${person} has been **unmuted** `)
        .addField("**Unuted BY:**", ` ${message.author}`, true)
        .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
        .setTimestamp()
    channel.send(xdemby)

}
if (message.content.length >= 500) {
  if (message.author.bot) return console.log('working');
  if (message.member.hasPermission("BAN_MEMBERS")) return console.log("ifnore!");
  if (message.author.id === '373279309852311563') return console.log('ignore');
  message.channel.send(`${message.author}" Wall text is not allowed in Polaris. You have been warned, if you continue to do this you will get muted."`).then(message.channel.bulkDelete('3'));
  message.channel.send(`m;warn ${message.author} wall spamZ`)
}
if (message.content.startsWith('m;ban')) {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let xdemb = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle("Ban Command")
      .addField("Description:", `Ban a member`, true)
      .addField("Usage:", `m; ban [user] [reason]`, true)
      .addField("Example:", `m; ban @rain spam`)

  if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry you don't have permission to use this!");

  let member = message.mentions.members.first();
  if (!member) return message.channel.send(xdemb)
  if (!member.bannable) return message.channel.send("I can't ban this user!")
  if (member.user.id === "291221132256870400") return message.channel.send("I can't ban my owner!")

  if (member.id === message.author.id) return message.channel.send("You can't ban your self")

  let reason = args.slice(1).join(" ");

  if (!reason) {
      res = "No reason given";
  } else {
      res = reason
  }

  member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

  let bean = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle(`Ban | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()

  message.channel.send(bean)
  const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
  let xdemby = new Discord.MessageEmbed()
      .setColor("GREY")
      .setTitle("BAN LOG")
      .addField(" **BAN:** ", ` ${member.user.tag} has been *banned* `)
      .addField("**Ban BY:**", message.author, true)
      .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
      .setTimestamp()
  channel.send(xdemby)
}
if (message.content.startsWith('m;kick')) {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");

  let xdemb = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle("Kick Command")
      .addField("Description:", `Kick a member`, true)
      .addField("Usage:", "!kick [user] [reason]", true)
      .addField("Example:", "!kick @rain suck me fatty")

  let member = message.mentions.members.first();
  if (!member) return message.channel.send(xdemb)

  if (!member.kickable)
      return message.channel.send("I cannot kick this user!");
  if (member.user.id === "291221132256870400") return message.channel.send("I can't kick my owner!")


  let reason = args.slice(1).join(' ');
  if (!reason) {
      res = "No reason given";
  } else {
      res = `${reason}`
  }

  member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

  let kick = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()
      .setFooter(member.id)

  message.channel.send(kick)
  const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
  let xdemby = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Kick LOG")
      .addField(" **KICK MEMBER:** ", ` ${member.user.tag} has been **kicked** `)
      .addField("**KICKED BY:**", message.author, true)
      .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
      .setTimestamp()
  channel.send(xdemby)

}
if (message.content.startsWith('m;unban')) {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  const embedMsg = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setTitle("unban LOG")
  .addField(" **unban:** ", ` member has been unbanned `)
  .addField("**unbanned by:**", `${message.author}`, true)
  .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
  .setTimestamp()
  let member = message.mentions.members.first() || args[0]
  if (!message.member.hasPermission('BAN_MEMBERS')) {
      embedMsg.setDescription(`You don't have permission to unban!`);
      return message.channel.send(embedMsg);
  }
  if (!args.length > 2) {
      embedMsg.setDescription('^unban takes at least one argument! the proper usage is ^unban <mention> ');
      return message.channel.send(embedMsg);
  }


  message.guild.members.unban(member)
      .then(() => {
          embedMsg.setDescription(`${message.author} you have succesfully unbanned member`);
          const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
          let xdemby = new Discord.MessageEmbed()
              .setColor("PURPLE")
              .setTitle("unban LOG")
              .addField(" **unban:** ", ` <@${member}> has been **UNBANNED** `)
              .addField("**UNBANNED BY:**", `${message.author}`, true)
              .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
              .setTimestamp()
          channel.send(xdemby)
          return message.channel.send(embedMsg);
      })
      .catch((err) => {
          embedMsg.setDescription(`${message.author} you need to put their id stupid lmao`);
          console.log(err);
          return message.channel.send(embedMsg);
      });
}
  if (message.content.startsWith('m;slowdown 10')) {
  if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
let duration = ('10')
message.channel.setRateLimitPerUser(duration)

message.channel.send("I have set the slowmode in this channel to " + duration + " seconds!")
}
if (message.content.startsWith('m;slowdown 5')) {
  if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
let duration = ('5')
message.channel.setRateLimitPerUser(duration)

message.channel.send("I have set the slowmode in this channel to " + duration + " seconds!")
}
if (message.content.startsWith('m;slowdown 15')) {
  if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
let duration = ('15')
message.channel.setRateLimitPerUser(duration)

message.channel.send("I have set the slowmode in this channel to " + duration + " seconds!")
}
if (message.content.startsWith('m;slowdown off')) {
  if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
let duration = ('0')
message.channel.setRateLimitPerUser(duration)

message.channel.send("I have set the slowmode in this channel to " + duration + " seconds!")
}

if (message.content.startsWith('m;join')) {
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

})


client.on('guildMemberAdd', member => {
  const Discord = require('discord.js')
  var client = new Discord.Client()
  const channel = member.guild.channels.cache.find(ch => ch.name === 'verify'); // change this to the channel name you want to send the greeting to
  if (!channel) return;
  channel.send(`Welcome ${member}!`);
  let xdemby = new Discord.MessageEmbed()
              .setColor("GREEN")
              .setTitle("Polaris-Manager")
              .setDescription(" **A new member has arrived** ", ` <@${member}> `)
              .addField("Welcome to Polaris, unknown travler! Dont be shy to say hello in Chat but first verify yourself here by doing m;join Good Fortunes")
              .setImage('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
              .setFooter('*make sure to read the rules in #rules')
          channel.send(xdemby);

});

client.login(token);
